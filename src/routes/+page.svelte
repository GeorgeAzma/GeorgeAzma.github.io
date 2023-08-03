<script>
	import Navbar from '$lib/Navbar.svelte';
	import Shader from '$lib/Shader.svelte';
	import { onMount } from 'svelte';
	$: frag = '';
	async function readFile() {
		try {
			const response = await fetch('background.frag');
			frag = await response.text();
		} catch (error) {
			console.error('Error reading the file:', error);
		}
	}
	onMount(readFile);
</script>

<Navbar />
<Shader {frag} />
<div class="main-text">
	I'm George Azmaipharashvili, Software engineer mainly specialized at graphics.
</div>

<div id="contact-info">Contact: geo.azmai@gmail.com</div>
<div id="bottom-text">© 2023-2025 George Azmaipharashvili. All rights reserved.</div>

<style>
	@font-face {
		font-family: 'Roboto Black';
		src: url('$lib/assets/Roboto/Black.ttf') format('truetype');
	}
	.main-text {
		color: white;
		position: absolute;
		inline-size: 80%;
		font-size: 3rem;
		font-weight: 800;
		text-align: center;
		top: 40%;
		padding-inline: 10%;
		transform: translateY(-40%);
		filter: drop-shadow(0px 0px 4px #221133);
		overflow: auto;
		overflow-wrap: break-word;
	}
	#bottom-text {
		font-family: 'Trebuchet MS', sans-serif;
		font-size: small;
		position: absolute;
		bottom: 0;
		right: 0;
		padding: 4px;
		color: #ddddff39;
	}
	#contact-info {
		font-family: 'Trebuchet MS', sans-serif;
		font-size: small;
		position: absolute;
		bottom: 0;
		padding: 4px;
		color: #ddddff66;
	}
</style>
