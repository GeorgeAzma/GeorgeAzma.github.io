<nav id="navbar">
	<a href="shadertoy.com/user/Peace">Shaders</a>
	<a>Github</a>
	<a>Fiverr</a>
</nav>

<style>
	#navbar {
		display: flex;
		position: absolute;
		justify-content: center;
		top: 0px;
		left: 0px;
		right: 0px;
		background-color: #ffffff20;
		border-bottom: 2px solid #ffffff33;
	}
	#navbar a {
		/* border: 2px solid black; */
		flex-grow: 1;
		flex: 1 1 1;
		text-align: center;
		border-right: 2px solid #ffffff33;
		transition: 200ms;
		padding: 16px;
		color: #ffffff;
		text-decoration: none;
	}
	#navbar a:last-child {
		border-right: none;
	}
	#navbar a:hover {
		background-color: #ffffff30;
		transition: 200ms;
	}
</style>
