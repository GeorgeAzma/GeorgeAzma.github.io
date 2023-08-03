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

<title>Portfolio</title>
<meta name="description" />

<Navbar />
<Shader {frag} />
<div class="main-text">
	I'm George Azmaipharashvili, Software engineer mainly specialized at graphics.
</div>

<style>
	@font-face {
		font-family: 'Roboto';
		src: url('$lib/assets/Roboto/Black.ttf') format('truetype');
	}
	.main-text {
		color: white;
		position: absolute;
		inline-size: 80%;
		font-size: 3rem;
		font-weight: 800;
		text-align: center;
		top: 30%;
		padding-inline: 10%;
		transform: translateY(-30%);
		filter: drop-shadow(0px 0px 3px #221133);
		overflow: auto;
		overflow-wrap: break-word;
	}
</style>
