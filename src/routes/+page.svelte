<script>
	import Navbar from '$lib/Navbar.svelte';
	import Shader from '$lib/Shader.svelte';
	import background from '$lib/assets/shaders/background.frag?raw';
	import { onMount } from 'svelte';
</script>

<Shader frag={background} />
<Navbar />
<div class="main-text">
	I'm George Azmaipharashvili Software engineer mainly specialized at graphics.
</div>

<div id="contact-info">lumi.main.mail@gmail.com</div>

<style>
	@font-face {
		font-family: 'Roboto Black';
		src: url('$lib/assets/fonts/Roboto/Bold.ttf') format('truetype');
	}
	.main-text {
		position: absolute;
		top: 50%;
		left: 50%;
		translate: -50% -50%;
		color: white;
		inline-size: 80%;
		justify-content: space-between;
		font-size: 10vmin;
		font-weight: 800;
		text-align: center;
		padding-inline: 10%;
		filter: drop-shadow(0px 0px 4px #221133);
		overflow: auto;
		overflow-wrap: break-word;
	}
	#contact-info {
		font-family: 'Trebuchet MS', sans-serif;
		font-size: small;
		position: absolute;
		bottom: 0;
		padding-inline: 4px;
		line-height: 1.5rem;
		color: #ddddff66;
		user-select: all;
		-webkit-user-select: all;
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
