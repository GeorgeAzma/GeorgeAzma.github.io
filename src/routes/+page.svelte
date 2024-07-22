<script lang="ts">
	import Navbar from '$lib/Navbar.svelte';
	import Shader from '$lib/Shader.svelte';
	import background from '$lib/assets/shaders/background.frag?raw';

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

<div id="gradient" class="glass-pane">
	<Shader frag={background} />
	<Navbar />
	<div class="main-text">
		George Azmaipharashvili, Software engineer mainly specialized at graphics.
	</div>

	<button id="contact-info" on:click={copyToClipboard}
		>{email}<span class="hidden">(Copied)</span></button
	>
</div>

<style>
	#gradient {
		width: 100vw;
		height: 100vh;
		margin: 0;
		padding: 0;
		left: 0;
		top: 0;
		position: absolute;
		border-radius: 0px;
		background: linear-gradient(0.5turn, #00000000, #000000aa);
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
		translate: -50% -50%;
		color: white;
		inline-size: 80%;
		font-size: 6vmin;
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
