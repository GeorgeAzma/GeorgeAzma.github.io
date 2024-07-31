<script lang="ts">
	import { onMount } from 'svelte';

	export let frag: string = '';
	export let vert: string = '';

	$: onShaderChange(vert, frag);

	let canvas: HTMLCanvasElement;
	let program: WebGLProgram | null = null;
	let gl: WebGL2RenderingContext | null = null;
	let start: number;
	let last: number;
	let resolutionLocation: WebGLUniformLocation | null = null;
	let timeLocation: WebGLUniformLocation | null = null;

	// Only compiles/renders if visible or next to visible
	function isCanvasVisible() {
		const rect = canvas.getBoundingClientRect();
		return rect.left >= -window.innerWidth && rect.right <= window.innerWidth * 2;
	}

	function resizeCanvas() {
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		if (gl && program) {
			gl.useProgram(program);
			gl.uniform2f(resolutionLocation, canvas.width, canvas.height);
			gl.viewport(0, 0, canvas.width, canvas.height);
		}
	}

	onMount(() => {
		gl = canvas.getContext('webgl2');
		if (!gl) {
			console.error('WebGL is not supported in this browser.');
			return;
		}
		start = performance.now();
		last = start;

		window.addEventListener('resize', resizeCanvas);
		onShaderChange(vert, frag);

		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	});

	function onShaderChange(vert: string, frag: string) {
		if (!frag)
			frag = `#version 300 es 
      out vec4 fragColor;
      void main() {
      fragColor = vec4(1, 0, 1, 1);
      }`;
		if (!vert)
			vert = `#version 300 es 
      void main() {
        vec2 vertices[3]=vec2[3](vec2(-1,-1), vec2(3,-1), vec2(-1, 3));
        gl_Position = vec4(vertices[gl_VertexID],0,1);
      }`;
		if (!gl) return;

		if (isCanvasVisible()) {
			const fs = gl.createShader(gl.FRAGMENT_SHADER);
			if (!fs) {
				alert('Could not create fragment shader');
				return;
			}
			gl.shaderSource(fs, frag);
			gl.compileShader(fs);
			if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
				const err = gl.getShaderInfoLog(fs);
				console.error('Fragment shader compilation error:', err);
			}

			const vs = gl.createShader(gl.VERTEX_SHADER);
			if (!vs) {
				alert('Could not create vertex shader');
				return;
			}
			gl.shaderSource(vs, vert);
			gl.compileShader(vs);
			if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
				const err = gl.getShaderInfoLog(vs);
				console.error('Vertex shader compilation error:', err);
			}

			if (program) {
				gl.deleteProgram(program);
				program = null;
			}
			program = gl.createProgram();
			if (!program) {
				alert('Could not create shader program');
				return;
			}
			gl.attachShader(program, fs);
			gl.attachShader(program, vs);
			gl.linkProgram(program);
			if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
				const err = gl.getProgramInfoLog(program);
				console.error('Program link error:', err);
			}
			gl.deleteShader(fs);
			gl.deleteShader(vs);

			gl.useProgram(program);
			resolutionLocation = gl.getUniformLocation(program, 'resolution');
			timeLocation = gl.getUniformLocation(program, 'time');
		}

		resizeCanvas();

		render();
	}

	function render() {
		if (!(canvas && gl)) return;

		let now = performance.now();
		if (!isCanvasVisible()) {
			requestAnimationFrame(render);
			const dt = now - last;
			start += dt;
			last = now;
			return;
		}

		if (!program) onShaderChange(vert, frag);
		if (!program) return;

		gl.clearColor(0, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(program);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		gl.uniform1f(timeLocation, (now - start) / 1000);
		last = now;
		requestAnimationFrame(render);
	}
</script>

<canvas id="background-shader" bind:this={canvas} />

<style>
	#background-shader {
		position: relative;
		z-index: -3;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
	}
</style>
