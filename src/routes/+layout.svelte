<script>
	import favicon from "$lib/assets/favicon.svg";

	let { data, children } = $props();

	let menuOpen = $state(false);
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
				<button class="dropbtn" onclick={() => (menuOpen = !menuOpen)}>
					Profil ▼
				</button>
				{#if menuOpen}
					<div class="dropdown-content">
						<a href="/profil">Profil ansehen</a>
						<a href="/forum">Forum</a>
						<form method="POST" action="/logout">
							<button type="submit" class="logout-btn">
								Abmelden
							</button>
						</form>
					</div>
				{/if}
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
		white-space: nowrap;
	}

	.links {
		display: flex;
		align-items: center;
		gap: 28px;
	}

	.links a {
		text-decoration: none;
		color: white;
		font-weight: 500;
		white-space: nowrap;
	}

	.links a:hover {
		text-decoration: underline;
	}

	main {
		padding: 0;
	}

	.dropdown {
		position: relative;
		display: flex;
		align-items: center;
	}

	.dropbtn {
		background: none;
		border: none;
		color: white;
		font: inherit;
		font-weight: 500;
		cursor: pointer;
		padding: 0;
		white-space: nowrap;
	}

	.dropdown-content {
	position: absolute;
	right: 0;
	top: 35px;

	background: rgba(0, 0, 0, 0.95);

	min-width: 190px;

	border-radius: 12px;

	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);

	z-index: 1000;
}

	.dropdown-content a,
	.logout-btn {
		display: block;
		width: 100%;
		color: white;
		padding: 14px 18px;
		text-decoration: none;
		background: none;
		border: none;
		font: inherit;
		text-align: left;
		cursor: pointer;
		box-sizing: border-box;
	}

	.dropdown-content a:hover,
	.logout-btn:hover {
		background: rgba(57, 211, 83, 0.25);
		text-decoration: none;
	}

	
</style>
