<section class="hero">
	<div class="overlay">
		<p class="subtitle">Simpel aber verständlich</p>

		<h1>Die Welt des Fussballs</h1>

		<p class="description">
			Fussballregeln einfach erklärt: Lerne wichtige Regeln, verstehe Spielsituationen
			und finde schnell heraus, was auf dem Platz wirklich gilt.
		</p>

		<a href="/regeln" class="button">Regeln entdecken</a>
	</div>
</section>

<style>
	.hero {
		min-height: 100vh;
		display: flex;
		align-items: center;
		padding-left: 80px;
		background-image:
			linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)),
			url('/img/hintergrundhome.png');
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
	}

	.overlay {
		max-width: 700px;
		background: rgba(0, 0, 0, 0.35);
		backdrop-filter: blur(5px);
		padding: 60px;
		border-radius: 24px;
	}

	.subtitle {
		color: #42d84b;
		font-size: 22px;
		font-weight: 600;
		margin-bottom: 12px;
	}

	h1 {
		color: white;
		font-size: 72px;
		line-height: 1.1;
		margin-bottom: 30px;
	}

	.description {
		color: white;
		font-size: 22px;
		line-height: 1.7;
		margin-bottom: 35px;
	}

	.button {
		display: inline-block;
		background: #35b843;
		color: white;
		text-decoration: none;
		padding: 18px 34px;
		border-radius: 14px;
		font-weight: bold;
		font-size: 18px;
	}

	.button:hover {
		background: #2ca138;
	}
</style>