<script>
	let { form } = $props();
</script>

<section class="register-page">
	<div class="box">
		<h1>Registrieren</h1>
		<p class="subtitle">Erstelle ein neues Konto.</p>

		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}

		{#if form?.success}
			<p class="success">{form.success}</p>
		{/if}

		<form method="POST" action="/login?/register">
			<label>
				E-Mail
				<input name="email" type="email" required />
			</label>

			<label>
				Passwort
				<input name="password" type="password" required minlength="6" />
			</label>

			<button type="submit">Konto erstellen</button>
		</form>

		<p class="login-link">
			Schon ein Konto?
			<a href="/login">Hier kannst du dich einloggen</a>
		</p>
	</div>
</section>

<style>
	.register-page {
		min-height: 100vh;
		padding: 140px 20px 60px;
		display: flex;
		justify-content: center;
		align-items: flex-start;
		background:
			linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
			url('/img/hintergrundhome.png');
		background-size: cover;
		background-position: center;
		background-attachment: fixed;
		color: white;
	}

	.box {
		width: 100%;
		max-width: 460px;
		background: rgba(0, 0, 0, 0.45);
		backdrop-filter: blur(10px);
		padding: 40px;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	h1 {
		font-size: 42px;
		margin-bottom: 8px;
	}

	.subtitle {
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 28px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	label {
		display: flex;
		flex-direction: column;
		font-weight: 600;
	}

	input {
		padding: 14px;
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		margin-top: 8px;
		background: rgba(255, 255, 255, 0.95);
		font-size: 16px;
	}

	button {
		margin-top: 10px;
		padding: 14px;
		border: none;
		border-radius: 14px;
		background: #39d353;
		color: white;
		font-weight: 700;
		cursor: pointer;
	}

	button:hover {
		background: #2db847;
	}

	.login-link {
		margin-top: 24px;
		font-size: 15px;
		color: rgba(255, 255, 255, 0.85);
	}

	.login-link a {
		color: #39d353;
		font-weight: 700;
		text-decoration: none;
	}

	.error {
		color: #ff6b6b;
	}

	.success {
		color: #39d353;
	}
</style>