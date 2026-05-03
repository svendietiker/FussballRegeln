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
		<a href="#">Fun Facts</a>
		<a href="#">Suchen</a>
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
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		z-index: 10;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 24px 60px;
		background: rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(6px);
	}

	.logo {
		font-weight: bold;
		font-size: 24px;
		text-decoration: none;
		color: white;
	}

	.links {
		display: flex;
		gap: 28px;
	}

	.links a {
		text-decoration: none;
		color: white;
		font-weight: 500;
	}

	.links a:hover {
		text-decoration: underline;
	}

	main {
		padding: 0;
	}
</style>