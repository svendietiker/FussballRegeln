<script>
	let { data } = $props();
</script>

<section class="page">
	<h1>Suchen</h1>
	<p>Suche nach Fussballregeln, Kategorien oder Begriffen.</p>

	<form method="GET" class="search-box">
		<input
			type="text"
			name="q"
			placeholder="z.B. Offside, Torwart, Handspiel..."
			value={data.query}
		/>
		<button type="submit">Suchen</button>
	</form>

	{#if data.query}
		<h2>Suchergebnisse für „{data.query}”</h2>

		{#if data.results.length > 0}
			<div class="grid">
				{#each data.results as rule}
					<a href={`/regeln/${rule.category}/${rule.slug}`} class="card">
						<h3>{rule.title}</h3>
						<p>{rule.shortDescription}</p>
						<span>{rule.category}</span>
					</a>
				{/each}
			</div>
		{:else}
			<p>Keine passenden Regeln gefunden.</p>
		{/if}
	{/if}
</section>

<style>
	.page {
		min-height: 100vh;
		padding: 140px 60px 60px;
		background:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
			url('/img/hintergrundhome.png');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		color: white;
	}

	h1 {
		font-size: 48px;
	}

	p {
		font-size: 18px;
	}

	.search-box {
		display: flex;
		gap: 12px;
		margin-top: 30px;
		max-width: 700px;
	}

	input {
		flex: 1;
		padding: 16px;
		border-radius: 14px;
		border: none;
		font-size: 16px;
	}

	button {
		background: #39d353;
		color: white;
		border: none;
		padding: 16px 28px;
		border-radius: 14px;
		font-weight: 600;
		cursor: pointer;
	}

	button:hover {
		background: #2db847;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-top: 30px;
	}

	.card {
		background: rgba(0, 0, 0, 0.45);
		backdrop-filter: blur(10px);
		color: white;
		text-decoration: none;
		padding: 30px;
		border-radius: 18px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
		transition: all 0.2s ease;
	}

	.card:hover {
		transform: translateY(-6px);
		background: rgba(0, 0, 0, 0.6);
	}

	.card p {
		color: rgba(255, 255, 255, 0.85);
	}

	.card span {
		display: inline-block;
		margin-top: 12px;
		color: #39d353;
		font-weight: 600;
	}
</style>