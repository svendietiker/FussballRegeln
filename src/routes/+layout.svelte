<script>
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="navbar">
	<a href="/" class="logo">⚽ FussballRegeln</a>

	<div class="links">
		<a href="/">Home</a>
		<a href="/regeln">Regeln</a>
		<a href="/feldspieler">Feldspieler</a>
		<a href="/offside">Offside</a>
		<a href="#">Fun Facts</a>
		<a href="#">Login</a>
	</div>
</nav>

<main>
	{@render children()}
</main>

<style>
	:global(body) {
		margin: 0;
		font-family: Arial, sans-serif;
		background-color: #f7f7f7;
		color: #111;
	}

	.navbar {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18px 40px;
		background-color: white;
		border-bottom: 1px solid #ddd;
	}

	.logo {
		font-weight: bold;
		font-size: 20px;
		text-decoration: none;
		color: black;
	}

	.links {
		display: flex;
		gap: 18px;
	}

	.links a {
		text-decoration: none;
		color: black;
		font-weight: 500;
	}

	.links a:hover {
		text-decoration: underline;
	}

	main {
		padding: 0;
	}
</style>