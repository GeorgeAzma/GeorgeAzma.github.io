<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Shader from '$lib/Shader.svelte';
	import background from '$lib/assets/shaders/background.frag?raw';
	import { onMount } from 'svelte';

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
</script>

<Shader frag={background} />
<Navbar />
<div class="main-text">
	George Azmaipharashvili, Software engineer mainly specialized at graphics.
</div>

<button id="contact-info" on:click={copyToClipboard}
	>{email}<span class="hidden">(Copied)</span></button
>

<style>
	@font-face {
		font-family: 'Roboto Bold';
		src: url('$lib/assets/fonts/Roboto/Bold.ttf') format('truetype');
	}
	@font-face {
		font-family: 'Roboto Medium';
		src: url('$lib/assets/fonts/Roboto/Medium.ttf') format('truetype');
	}
	.main-text {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		color: white;
		inline-size: 80%;
		font-size: 6vmin;
		font-weight: 700;
		text-align: center;
		padding-inline: 10%;
		filter: drop-shadow(0px 0px 4px #334455);
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
