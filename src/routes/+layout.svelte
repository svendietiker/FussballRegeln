<script>
	import favicon from '$lib/assets/favicon.svg';

	let { data, children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<nav class="navbar">
	<a href="/" class="logo">⚽ FussballRegeln</a>

	<div class="links">
		<a href="/">Home</a>
		<a href="/regeln">Regeln</a>
		<a href="/funfacts">Fun Facts</a>
		<a href="/suchen">Suchen</a>

		{#if data.user}
	<div class="dropdown">
		<button class="dropbtn">Profil ▾</button>

		<div class="dropdown-content">
			<a href="/profil">Profil ansehen</a>
			<a href="/forum">Forum</a>
		</div>
	</div>
{:else}
	<a href="/login">Login</a>
{/if}
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

	.dropdown {
	position: relative;
	display: inline-block;
}

.dropbtn {
	background: none;
	border: none;
	color: white;
	font: inherit;
	cursor: pointer;
	padding: 8px 12px;
}

.dropdown-content {
	display: none;
	position: absolute;
	right: 0;
	top: 100%;
	background: rgba(0, 0, 0, 0.9);
	min-width: 180px;
	border-radius: 12px;
	overflow: hidden;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
	z-index: 1000;
}

.dropdown-content a {
	display: block;
	color: white;
	padding: 14px 18px;
	text-decoration: none;
}

.dropdown-content a:hover {
	background: rgba(57, 211, 83, 0.25);
}

.dropdown:hover .dropdown-content {
	display: block;
}
</style>