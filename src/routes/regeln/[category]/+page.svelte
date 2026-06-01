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
	min-height: 100vh;
	padding: 140px 60px 60px;

	background:
		linear-gradient(
			rgba(0, 0, 0, 0.75),
			rgba(0, 0, 0, 0.75)
		),
		url('/img/hintergrundhome.png');

	background-size: cover;
	background-position: center;
	background-attachment: fixed;

	color: white;
}

	.back {
	color: white;
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
	box-shadow: 0 12px 30px rgba(0, 0, 0, 0.45);
}
</style>