<script>
	export let data;
	const rule = data.rule;
</script>

<section class="detail-page">
	<div class="rule-card">
		<h1>{rule.title}</h1>
		<p class="short">{rule.shortDescription}</p>

		{#if rule.imageUrl}
			<img src={rule.imageUrl} alt={rule.title} class="rule-image" />
		{/if}

		<div class="info-card">
			<h2>Erklärung</h2>
			<p>{rule.explanation}</p>
		</div>

		<div class="info-card">
			<h2>Beispiel</h2>
			<p>{rule.example}</p>
		</div>

		<p class="meta">Gültig seit: {rule.validSince}</p>

		{#if rule.isNewRule}
			<p class="badge">Neue Regel</p>
		{/if}
	</div>

	<div class="back-container">
		<a href={`/regeln/${rule.category}`} class="back-button">
			← Zurück zur Kategorie
		</a>
	</div>
</section>

<style>
	.detail-page {
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

	.rule-card {
		max-width: 1000px;
		background: rgba(0, 0, 0, 0.45);
		backdrop-filter: blur(10px);
		padding: 40px;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	h1 {
		font-size: 48px;
		margin-bottom: 10px;
	}

	.short {
		font-size: 20px;
		color: rgba(255, 255, 255, 0.85);
		margin-bottom: 30px;
	}

	.rule-image {
		width: 100%;
		max-height: 420px;
		object-fit: cover;
		border-radius: 16px;
		margin-bottom: 30px;
	}

	.info-card {
		background: rgba(255, 255, 255, 0.08);
		padding: 24px;
		border-radius: 16px;
		margin-bottom: 20px;
	}

	.info-card h2 {
		margin-top: 0;
		color: #39d353;
	}

	.info-card p,
	.meta {
		color: rgba(255, 255, 255, 0.9);
	}

	.badge {
		display: inline-block;
		background: #39d353;
		color: white;
		padding: 8px 14px;
		border-radius: 999px;
		font-weight: 600;
	}

	.back-container {
		margin-top: 40px;
	}

	.back-button {
		display: inline-block;
		background: #39d353;
		color: white;
		text-decoration: none;
		font-weight: 600;
		padding: 14px 28px;
		border-radius: 14px;
		transition: all 0.2s ease;
	}

	.back-button:hover {
		background: #2db847;
		transform: translateY(-2px);
	}
</style>