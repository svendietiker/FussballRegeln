<script>
	export let data;
	const rule = data.rule;
</script>

<section class="detail-page">
	<a class="back-link" href={`/regeln/${rule.category}`}>← Zurück zur Kategorie</a>

	<h1>{rule.title}</h1>
	<p class="short">{rule.shortDescription}</p>

	{#if rule.imageUrl}
		<img src={rule.imageUrl} alt={rule.title} class="rule-image" />
	{/if}

	<div class="card">
		<h2>Erklärung</h2>
		<p>{rule.explanation}</p>
	</div>

	<div class="card">
		<h2>Beispiel</h2>
		<p>{rule.example}</p>
	</div>

	<p class="meta">Gültig seit: {rule.validSince}</p>

	{#if rule.isNewRule}
		<p class="badge">Neue Regel</p>
	{/if}
</section>

<style>
	.detail-page {
		max-width: 900px;
		margin: 0 auto;
		padding: 3rem 1.5rem;
	}

	.back-link {
		display: inline-block;
		margin-bottom: 1.5rem;
		color: #1f7a3a;
		text-decoration: none;
		font-weight: 600;
	}

	h1 {
		font-size: 2.5rem;
		margin-bottom: 0.5rem;
	}

	.short {
		font-size: 1.2rem;
		color: #555;
		margin-bottom: 2rem;
	}

	.rule-image {
		width: 100%;
		max-height: 420px;
		object-fit: cover;
		border-radius: 16px;
		margin-bottom: 2rem;
	}

	.card {
		background: white;
		padding: 1.5rem;
		border-radius: 16px;
		box-shadow: 0 4px 16px rgba(0, 0, 0, 0.08);
		margin-bottom: 1.5rem;
	}

	.card h2 {
		margin-top: 0;
		color: #1f7a3a;
	}

	.meta {
		color: #666;
	}

	.badge {
		display: inline-block;
		background: #1f7a3a;
		color: white;
		padding: 0.4rem 0.8rem;
		border-radius: 999px;
		font-weight: 600;
	}
</style>