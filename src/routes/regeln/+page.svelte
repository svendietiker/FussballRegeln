<section class="page">
	<h1>Regeln</h1>
	<p>Wähle eine Kategorie aus, um passende Fussballregeln zu entdecken.</p>

	<div class="grid">
		<a href="/regeln/feldspieler" class="card">
			<h2>Feldspieler</h2>
			<p>Offside, Handspiel, Foulspiel, Einwurf und weitere Regeln.</p>
		</a>

		<a href="/regeln/torwart" class="card">
			<h2>Torwart</h2>
			<p>Regeln rund um Strafraum, Rückpass und Torwartspiel.</p>
		</a>

		<a href="/regeln/schiedsrichter" class="card">
			<h2>Schiedsrichter</h2>
			<p>Karten, Entscheidungen und Spielleitung.</p>
		</a>

		<a href="/regeln/neue-regeln" class="card">
			<h2>Neue Regeln</h2>
			<p>Aktuelle Regeländerungen einfach erklärt.</p>
		</a>
	</div>
</section>

<style>
	.page {
		min-height: 100vh;
		padding: 140px 60px 60px;
		background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
			url("/img/hintergrundhome.png");
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
		background: rgba(255, 255, 255, 0.95);
		color: black;
		text-decoration: none;
		padding: 30px;
		border-radius: 18px;
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
		backdrop-filter: blur(4px);
		transition: all 0.2s ease;
	}

	.card:hover {
		transform: translateY(-6px);
		box-shadow: 0 12px 30px rgba(0, 0, 0, 0.35);
	}
</style>
