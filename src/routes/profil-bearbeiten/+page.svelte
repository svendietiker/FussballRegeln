<script>
	let { data, form } = $props();
</script>

<section class="edit-page">
	<div class="edit-card">
		<h1>Profil bearbeiten</h1>
		<p class="subtitle">Passe deine Profilinformationen an.</p>

		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}

		{#if form?.success}
			<p class="success">{form.success}</p>
		{/if}

		<form method="POST">
			<label>
				E-Mail
				<input type="email" value={data.user.email} disabled />
			</label>

			<label>
				Anzeigename
				<input
					name="displayName"
					type="text"
					placeholder="z.B. Sven"
					value={data.user.displayName}
					required
				/>
			</label>

			<label>
				Lieblingsposition
				<select name="favoritePosition" value={data.user.favoritePosition}>
					<option value="">Bitte auswählen</option>
					<option value="Torwart">Torwart</option>
					<option value="Verteidiger">Verteidiger</option>
					<option value="Mittelfeld">Mittelfeld</option>
					<option value="Stürmer">Stürmer</option>
					<option value="Schiedsrichter">Schiedsrichter</option>
					<option value="Fan/Zuschauer">Fan/Zuschauer</option>
				</select>
			</label>

			<div class="button-row">
				<a href="/profil" class="back-button">← Zurück zum Profil</a>
				<button type="submit">Änderungen speichern</button>
			</div>
		</form>
	</div>
</section>

<style>
	.edit-page {
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

	.edit-card {
		max-width: 700px;
		background: rgba(0, 0, 0, 0.45);
		backdrop-filter: blur(10px);
		padding: 40px;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	h1 {
		font-size: 42px;
		margin: 0 0 8px;
	}

	.subtitle {
		color: rgba(255, 255, 255, 0.8);
		margin-bottom: 28px;
	}

	form {
		display: flex;
		flex-direction: column;
		gap: 20px;
	}

	label {
		display: flex;
		flex-direction: column;
		font-weight: 600;
	}

	input,
	select {
		margin-top: 8px;
		padding: 14px;
		border-radius: 12px;
		border: 1px solid rgba(255, 255, 255, 0.2);
		font-size: 16px;
		background: rgba(255, 255, 255, 0.95);
	}

	input:disabled {
		opacity: 0.7;
		cursor: not-allowed;
	}

	.button-row {
		margin-top: 28px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 20px;
	}

	button,
	.back-button {
		background: #39d353;
		color: white;
		text-decoration: none;
		border: none;
		padding: 14px 28px;
		border-radius: 14px;
		font-weight: 700;
		cursor: pointer;
		font-size: 16px;
		transition: all 0.2s ease;
	}

	button:hover,
	.back-button:hover {
		background: #2db847;
		transform: translateY(-2px);
	}

	.error {
		color: #ff6b6b;
	}

	.success {
		color: #39d353;
	}
</style>