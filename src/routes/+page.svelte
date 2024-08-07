<script lang="ts">
	import { onMount, onDestroy, tick } from 'svelte';
	import Navbar from '$lib/Navbar.svelte';
	import Shader from '$lib/Shader.svelte';
	import glossyGradients from '$lib/assets/shaders/glossy-gradients.frag?raw';
	import carbonFiber from '$lib/assets/shaders/carbon-fiber.frag?raw';
	import lavaLamp from '$lib/assets/shaders/lava-lamp.frag?raw';
	import siri from '$lib/assets/shaders/siri.frag?raw';
	import chromicClarity from '$lib/assets/shaders/chromic-clarity.frag?raw';

	const email = 'lumi.main.mail@gmail.com';
	const copyToClipboard = (e: Event & { currentTarget: HTMLElement }) => {
		navigator.clipboard.writeText(email);
		const child = e.currentTarget.children.item(0);
		if (!child) return;
		child.classList.remove('hidden');
		setTimeout(() => {
			child.classList.add('hidden');
		}, 2000);
	};

	let shadersContainer: any;
	let scrollTimeout: any = null;
	let index = 0;

	const detectScrollEnd = async () => {
		if (scrollTimeout !== null) {
			clearTimeout(scrollTimeout);
			scrollTimeout = null;
		}
		scrollTimeout = setTimeout(() => {
			index = Math.round(shadersContainer.scrollLeft / window.innerWidth);
			shadersContainer.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
		}, 500);
	};

	function scrollLeft() {
		if (shadersContainer !== null) {
			index -= 1;
			if (index < 0) index = shadersContainer.scrollWidth / window.innerWidth - 1;
			shadersContainer.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
		}
	}

	function scrollRight() {
		if (shadersContainer !== null) {
			index += 1;
			if (index > shadersContainer.scrollWidth / window.innerWidth - 1) index = 0;
			shadersContainer.scrollTo({ left: index * window.innerWidth, behavior: 'smooth' });
		}
	}

	const handleScroll = () => {
		detectScrollEnd();
	};

	const handleKeyPress = (event: KeyboardEvent) => {
		switch (event.key) {
			case 'ArrowLeft':
			case 'a':
				scrollLeft();
				break;
			case 'ArrowRight':
			case 'd':
			case ' ':
				scrollRight();
				break;
		}
	};

	const handleWheel = (event: WheelEvent) => {
		if (event.deltaY > 0) scrollLeft();
		else scrollRight();
	};

	let oldWidth = 0;
	const handleResize = () => {
		let scroll = Math.round(shadersContainer.scrollLeft / oldWidth) * window.innerWidth;
		if (shadersContainer) shadersContainer.scrollTo({ left: scroll, behavior: 'instant' });
		oldWidth = window.innerWidth;
	};

	let mx = 0;
	let my = 0;
	const handleMouseDown = (event: MouseEvent) => {
		if (event.button === 0) {
			mx = event.clientX;
			my = event.clientY;
		}
	};

	const handleMouseUp = (event: MouseEvent) => {
		if (event.button === 0) {
			const dx = event.clientX - mx;
			const dy = event.clientY - my;
			if (Math.abs(dx) > Math.abs(dy)) {
				if (dx > 0) scrollLeft();
				else scrollRight();
			}
		}
	};

	onMount(() => {
		if (shadersContainer) shadersContainer.addEventListener('scroll', handleScroll);
		if (window) {
			oldWidth = window.innerWidth;
			window.addEventListener('keyup', handleKeyPress);
			window.addEventListener('resize', handleResize);
			window.addEventListener('wheel', handleWheel);
			window.addEventListener('mousedown', handleMouseDown);
			window.addEventListener('mouseup', handleMouseUp);
		}
	});

	onDestroy(() => {
		if (shadersContainer) shadersContainer.removeEventListener('scroll', handleScroll);
		if (typeof window !== 'undefined') {
			window.removeEventListener('keyup', handleKeyPress);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('wheel', handleWheel);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
		}
	});
</script>

<div class="loader" />
<div id="gradient" class="glass-pane">
	<Navbar />
	<div bind:this={shadersContainer} id="shaders">
		<Shader frag={glossyGradients} />
		<Shader frag={carbonFiber} />
		<Shader frag={lavaLamp} />
		<Shader frag={siri} />
		<Shader frag={chromicClarity} />
	</div>
	<h1 class="main-text">I'm Lumiey, graphics developer and software engineer.</h1>

	<button id="contact-info" aria-label="Contact me" on:click={copyToClipboard}
		>{email}<span class="hidden">(Copied)</span></button
	>
	<button class="arrow-left" aria-label="Scroll left" on:click={scrollLeft}>
		<svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa">
			<path
				transform="translate(-331.000000, -6519.000000)"
				d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539"
			/>
		</svg></button
	>
	<button class="arrow-right" aria-label="Scroll right" on:click={scrollRight}
		><svg viewBox="-4.5 0 20 20" stroke="#ffffffcc" stroke-width="0.6" fill="#ffffffaa">
			<path
				transform="scale(-1, 1) translate(-341.000000, -6519.000000)"
				d="M338.61,6539 L340,6537.594 L331.739,6528.987 L332.62,6528.069 L332.615,6528.074 L339.955,6520.427 L338.586,6519 C336.557,6521.113 330.893,6527.014 329,6528.987 C330.406,6530.453 329.035,6529.024 338.61,6539"
			/>
		</svg></button
	>
</div>

<style>
	.loader {
		position: absolute;
		translate: calc(50vw - 50%) calc(70vh - 50%);
		width: 80px;
		height: 80px;
		border-radius: 50%;
		z-index: -10;
		background: radial-gradient(farthest-side, #0f314d 94%, #0000) top/16px 16px no-repeat,
			conic-gradient(#0000 30%, #0f314d);
		mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
		-webkit-mask: radial-gradient(farthest-side, #0000 calc(100% - 16px), #000 0);
		animation: l13 400ms infinite linear;
	}
	@keyframes l13 {
		100% {
			transform: rotate(1turn);
		}
	}
	.arrow-left,
	.arrow-right {
		position: absolute;
		border: none;
		background: none;
		outline: none;
		top: 50%;
		transition: 300ms;
		width: 4rem;
		padding: 0.5rem;
		translate: 0% -50%;
		padding-block: 12rem;
		border-radius: 1rem;
		opacity: 0.5;
		filter: drop-shadow(3px 3px 2px #00000077);
	}
	.arrow-left:hover,
	.arrow-right:hover {
		opacity: 0.9;
		box-shadow: inset 0px 0px 32px #ddeeff55, inset 0px 0px 4px #ddeeff55, 0px 0px 12px #54646b44;
	}

	.arrow-left {
		left: 0.7rem;
	}
	.arrow-left:hover {
		translate: -5% -50%;
		background: linear-gradient(-0.25turn, #00000000, #ffffff22);
	}
	.arrow-left:active {
		background: #ffffff22;
		box-shadow: inset 0px 0px 32px #ddeeff55, inset 0px 0px 4px #ddeeff55;
	}

	.arrow-right {
		right: 0.7rem;
	}
	.arrow-right:hover {
		translate: 5% -50%;
		background: linear-gradient(0.25turn, #00000000, #ffffff22);
	}
	.arrow-right:active {
		background: #ffffff22;
		box-shadow: inset 0px 0px 32px #ddeeff44, inset 0px 0px 4px #ddeeff44;
	}

	#shaders {
		display: flex;
		position: absolute;
		top: 0;
		left: 0;
		margin: 0;
		padding: 0;
		width: 100%;
		height: 100%;
		overflow-x: scroll;
		overflow-y: hidden;
		scrollbar-width: none;
		touch-action: pan-y;
	}
	#gradient {
		display: flex;
		flex-direction: column;
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		left: 0;
		top: 0;
		position: absolute;
		border-radius: 0px;
		background: linear-gradient(0.5turn, #00005544, #00000000, #00000000, #21112599);
	}
	.glass-pane {
		margin: 4px;
		padding: calc(4px + 1vh);
		box-shadow: inset 0px 0px 32px #ddeeff66, inset 0px 0px 4px #ddeeff66;
		border-radius: calc(1vh + 4px);
	}
	.main-text {
		position: absolute;
		top: 50%;
		left: 50%;
		margin-block: 0;
		translate: -50% -50%;
		color: white;
		inline-size: 75%;
		font-size: 5vmin;
		font-weight: 700;
		text-align: center;
		padding-inline: 10%;
		filter: drop-shadow(0px 0px 3px #445577);
		background: linear-gradient(0.25turn, #3f67ff, #eff1ff, #ff99fc);
		background-clip: text;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	#contact-info {
		font-family: 'Trebuchet MS', sans-serif;
		font-size: medium;
		position: absolute;
		bottom: 0;
		margin: 4px;
		line-height: 1.49rem;
		height: 1.5rem;
		color: #eeeeff66;
		background: none;
		outline: none;
		border: none;
		transition: 100ms;
	}
	#contact-info span {
		padding-left: 8px;
		transition: 300ms;
		color: #ffffffaa;
	}
	#contact-info .hidden {
		font-size: 0px;
		position: fixed;
		transition: 300ms;
	}
	#contact-info:hover {
		background-color: #ffffff11;
		border-radius: 8px;
		transition: 100ms;
	}
	#contact-info:active {
		background-color: #ffffff22;
		border-radius: 8px;
		transition: 100ms;
	}
	::-moz-selection {
		color: #aaa;
		background: #ffffff22;
	}
	::selection {
		color: #aaa;
		background: #ffffff22;
	}
</style>
