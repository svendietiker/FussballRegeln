<section class="hero">
  <div>
    <p class="subtitle">Simpel aber verständlich</p>
    <h1>Die Welt des Fussballs</h1>
    <p>
      Fussball ist ständig mit neuen Entwicklungen und Regeländerungen konfrontiert.
      Diese Webseite hilft dir, wichtige Regeln einfach, schnell und verständlich zu lernen.
    </p>

    <a class="button" href="/regeln">Regeln entdecken</a>
  </div>

  <div class="image-box">
    ⚽
  </div>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    align-items: center;
    min-height: 70vh;
  }

  .subtitle {
    color: #666;
    font-size: 16px;
  }

  h1 {
    font-size: 48px;
    margin: 10px 0;
  }

  p {
    font-size: 18px;
    line-height: 1.6;
  }

  .button {
    display: inline-block;
    margin-top: 24px;
    padding: 14px 24px;
    background-color: black;
    color: white;
    text-decoration: none;
    border-radius: 8px;
  }

  .image-box {
    height: 350px;
    background-color: #e5e5e5;
    border-radius: 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 100px;
  }
</style>