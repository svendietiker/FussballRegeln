<section class="hero">
	<div class="hero-overlay">
		<p class="subtitle">Simpel aber verständlich</p>

		<h1>Die Welt des Fussballs</h1>

		<p class="description">
			Fussballregeln einfach erklärt: Lerne wichtige Regeln, verstehe Spielsituationen
			und finde schnell heraus, was auf dem Platz wirklich gilt.
		</p>

		<a class="button" href="/regeln">Regeln entdecken</a>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
		padding: 40px;

		background:
			linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)),
			repeating-linear-gradient(
				90deg,
				#1f7a35 0px,
				#1f7a35 120px,
				#24913f 120px,
				#24913f 240px
			);
	}

	.hero::before {
		content: "";
		position: absolute;
		width: 420px;
		height: 420px;
		border: 5px solid rgba(255, 255, 255, 0.35);
		border-radius: 50%;
	}

	.hero-overlay {
		position: relative;
		z-index: 1;
		max-width: 850px;
		padding: 60px;
		border-radius: 24px;
		background: rgba(0, 0, 0, 0.35);
		backdrop-filter: blur(4px);
	}

	.subtitle {
		color: #e0e0e0;
		font-size: 18px;
		margin-bottom: 10px;
	}

	h1 {
		color: white;
		font-size: 64px;
		margin: 0 0 24px;
	}

	.description {
		color: white;
		font-size: 21px;
		line-height: 1.6;
		margin-bottom: 32px;
	}

	.button {
		display: inline-block;
		padding: 16px 32px;
		background: white;
		color: black;
		text-decoration: none;
		border-radius: 12px;
		font-weight: bold;
		transition: 0.2s;
	}

	.button:hover {
		transform: scale(1.05);
		background: #f0f0f0;
	}
</style>