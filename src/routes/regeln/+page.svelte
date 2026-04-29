<h1>Regeln</h1>
<p>Wähle eine Regelkategorie aus.</p>

<div class="grid">
  <a class="card" href="/feldspieler">
    <h2>Feldspieler</h2>
    <p>Regeln wie Offside, Handspiel, Foulspiel und Einwurf.</p>
  </a>

  <div class="card">
    <h2>Torwart</h2>
    <p>Regeln rund um den Torwart und Strafraum.</p>
  </div>

  <div class="card">
    <h2>Schiedsrichter</h2>
    <p>Entscheidungen, Karten und Spielleitung.</p>
  </div>

  <div class="card">
    <h2>Neue Regeln</h2>
    <p>Aktuelle Regeländerungen im Fussball.</p>
  </div>
</div>

<style>
  h1 {
    font-size: 42px;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;
    margin-top: 30px;
  }

  .card {
    background-color: white;
    padding: 28px;
    border-radius: 14px;
    text-decoration: none;
    color: black;
    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.06);
    transition: 0.2s;
  }

  .card:hover {
    transform: translateY(-4px);
  }

  .card h2 {
    margin-top: 0;
  }
</style>