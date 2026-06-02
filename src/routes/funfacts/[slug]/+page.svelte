<script>
	let { data } = $props();
	const fact = data.fact;
</script>

<section class="page">
	<div class="fact-card">
		<h1>{fact.title}</h1>
		<p class="short">{fact.shortDescription}</p>

		<div class="info-card">
			<h2>Erklärung</h2>
			<p>{fact.explanation}</p>
		</div>

		<div class="info-card">
			<h2>Beispiel</h2>
			<p>{fact.example}</p>
		</div>

		<p class="meta">Gültig bis: {fact.validUntil}</p>
	</div>

	<div class="back-container">
		<a href="/funfacts" class="back-button">← Zurück zu Fun Facts</a>
	</div>
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

	.fact-card {
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
	}

	.short {
		font-size: 20px;
		color: rgba(255, 255, 255, 0.85);
	}

	.info-card {
		background: rgba(255, 255, 255, 0.08);
		padding: 24px;
		border-radius: 16px;
		margin-top: 20px;
	}

	.info-card h2 {
		color: #39d353;
	}

	.meta {
		margin-top: 25px;
		color: rgba(255, 255, 255, 0.85);
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