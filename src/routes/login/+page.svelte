<script>
	let { form } = $props();
</script>

<section class="login-page">
	<div class="box">
		<h1>Login</h1>

		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}

		{#if form?.success}
			<p class="success">{form.success}</p>
		{/if}

		<form method="POST" action="?/login">
			<h2>Anmelden</h2>

			<label>
				E-Mail
				<input name="email" type="email" required />
			</label>

			<label>
				Passwort
				<input name="password" type="password" required />
			</label>

			<button type="submit">Einloggen</button>
		</form>

		<hr />

		<form method="POST" action="?/register">
			<h2>Registrieren</h2>

			<label>
				E-Mail
				<input name="email" type="email" required />
			</label>

			<label>
				Passwort
				<input name="password" type="password" required minlength="6" />
			</label>

			<button type="submit">Registrieren</button>
		</form>
	</div>
</section>

<style>
	.login-page {
		padding: 140px 20px 60px;
		display: flex;
		justify-content: center;
	}

	.box {
		width: 100%;
		max-width: 420px;
		background: white;
		padding: 30px;
		border-radius: 18px;
		box-shadow: 0 4px 14px rgba(0, 0, 0, 0.08);
	}

	h1 {
		text-align: center;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 14px;
	}

	label {
		display: flex;
		flex-direction: column;
		font-weight: bold;
	}

	input {
		padding: 12px;
		border-radius: 8px;
		border: 1px solid #ccc;
		margin-top: 6px;
	}

	button {
		padding: 12px;
		border: none;
		border-radius: 8px;
		background: #1f7a3a;
		color: white;
		font-weight: bold;
		cursor: pointer;
	}

	.error {
		color: red;
		text-align: center;
	}

	.success {
		color: green;
		text-align: center;
	}

	hr {
		margin: 30px 0;
	}
</style>