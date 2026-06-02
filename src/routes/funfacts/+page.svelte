<script>
	let { data } = $props();
</script>

<section class="page">
	<h1>Fun Facts</h1>
	<p>Alte, kuriose und nicht mehr aktuelle Fussballregeln.</p>

	<div class="grid">
		{#each data.funfacts as fact}
			<a href={`/funfacts/${fact.slug}`} class="card">
				<h2>{fact.title}</h2>
				<p>{fact.shortDescription}</p>
			</a>
		{/each}
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

	h1 {
		font-size: 48px;
	}

	p {
		font-size: 18px;
	}

	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
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
	}
</style>