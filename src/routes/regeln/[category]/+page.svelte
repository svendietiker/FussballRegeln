<script>
	let { data } = $props();
</script>

<section class="page">
	<a href="/regeln" class="back">← Zurück zu Regeln</a>

	<h1>{data.category}</h1>
	<p>Wähle eine Regel aus dieser Kategorie aus.</p>

	<div class="grid">
		{#each data.rules as rule}
			<a href={`/regeln/${rule.category}/${rule.slug}`} class="card">
				<h2>{rule.title}</h2>
				<p>{rule.shortDescription}</p>
			</a>
		{/each}
	</div>
</section>

<style>
	.page {
		padding: 140px 60px 60px;
	}

	.back {
		color: black;
		text-decoration: none;
		font-weight: bold;
	}

	h1 {
		font-size: 48px;
		text-transform: capitalize;
	}

	p {
		font-size: 18px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		gap: 24px;
		margin-top: 40px;
	}

	.card {
		background: white;
		color: black;
		text-decoration: none;
		padding: 30px;
		border-radius: 18px;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
	}

	.card:hover {
		transform: translateY(-4px);
	}
</style>