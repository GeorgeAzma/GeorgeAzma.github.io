<script lang="ts">
	import { afterUpdate, onMount } from 'svelte';

	export let frag: string = '';
	export let vert: string = '';

	$: onShaderChange(vert, frag);

	let canvas: HTMLCanvasElement;
	let program: WebGLProgram | null;
	let gl: WebGL2RenderingContext | null;
	let start = performance.now();
	const vertices = [-1, -1, 1, -1, -1, 1, 1, 1];
	let vertexBuffer: WebGLBuffer | null;

	function resizeCanvas() {
		if (!canvas) {
			return;
		}
		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		if (gl && program) {
			const res = gl.getUniformLocation(program, 'resolution');
			gl.uniform2f(res, canvas.width, canvas.height);
			gl.viewport(0, 0, canvas.width, canvas.height);
		}
	}

	onMount(() => {
		gl = canvas.getContext('webgl2');
		if (!gl) {
			console.error('WebGL is not supported in this browser.');
			return;
		}
		vertexBuffer = gl.createBuffer();
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
		start = performance.now();

		window.addEventListener('resize', resizeCanvas);
		onShaderChange(vert, frag);

		return () => {
			window.removeEventListener('resize', resizeCanvas);
		};
	});

	function onShaderChange(vert: string, frag: string) {
		if (!frag) frag = 'precision mediump float;void main() {gl_FragColor=vec4(1);}';
		if (!vert) vert = 'attribute vec4 a_position;void main() {gl_Position = a_position;}';
		if (!gl) return;

		const fs = gl.createShader(gl.FRAGMENT_SHADER);
		if (!fs) {
			alert('Could not create fragment shader');
			return;
		}
		gl.shaderSource(fs, frag);
		gl.compileShader(fs);
		if (!gl.getShaderParameter(fs, gl.COMPILE_STATUS)) {
			const errorLog = gl.getShaderInfoLog(fs);
			console.error('Fragment shader compilation error:', errorLog);
		}

		const vs = gl.createShader(gl.VERTEX_SHADER);
		if (!vs) {
			alert('Could not create vertex shader');
			return;
		}
		gl.shaderSource(vs, vert);
		gl.compileShader(vs);
		if (!gl.getShaderParameter(vs, gl.COMPILE_STATUS)) {
			const errorLog = gl.getShaderInfoLog(vs);
			console.error('Vertex shader compilation error:', errorLog);
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
		gl.deleteShader(fs);
		gl.deleteShader(vs);

		gl.useProgram(program);
		const positionAttribute = gl.getAttribLocation(program, 'a_position');
		gl.enableVertexAttribArray(positionAttribute);
		gl.vertexAttribPointer(positionAttribute, 2, gl.FLOAT, false, 0, 0);

		resizeCanvas();

		render();
	}

	function render() {
		if (!(canvas && gl && program)) return;

		gl.clearColor(0, 0, 0, 1);
		gl.clear(gl.COLOR_BUFFER_BIT);

		gl.useProgram(program);
		gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
		gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
		const time = gl.getUniformLocation(program, 'time');
		if (time) gl.uniform1f(time, (performance.now() - start) / 1000);
		requestAnimationFrame(render);
	}
</script>

<canvas id="background-shader" bind:this={canvas} />

<style>
	#background-shader {
		position: fixed;
		top: 0;
		left: 0;
		z-index: -1;
	}
</style>
