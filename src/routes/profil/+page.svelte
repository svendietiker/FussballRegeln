<script>
	let { data } = $props();
</script>

<section class="profile-page">
	<div class="profile-card">
		<div class="profile-header">
			<div class="avatar">👤</div>

			<div>
				<h1>Mein Profil</h1>
				<h2>{data.user.displayName}</h2>
				<p>{data.user.email}</p>
				<p class="position">
					Lieblingsposition: {data.user.favoritePosition}
				</p>
			</div>
		</div>

		<div class="button-row">
			<a href="/" class="home-btn"> ← Zurück zur Homepage </a>

			<a href="/profil-bearbeiten" class="edit-btn">
				Profil bearbeiten
			</a>
		</div>
	</div>
</section>

<style>
	.profile-page {
		min-height: 100vh;
		padding: 140px 60px 60px;

		background: linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)),
			url("/img/hintergrundhome.png");

		background-size: cover;
		background-position: center;
		background-attachment: fixed;

		color: white;
	}

	.profile-card {
		max-width: 900px;

		background: rgba(0, 0, 0, 0.45);

		backdrop-filter: blur(10px);

		padding: 40px;

		border-radius: 20px;

		border: 1px solid rgba(255, 255, 255, 0.1);

		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
	}

	.profile-header {
		display: flex;
		align-items: center;
		gap: 30px;
	}

	.avatar {
		width: 120px;
		height: 120px;

		border-radius: 50%;

		background: rgba(255, 255, 255, 0.1);

		display: flex;
		align-items: center;
		justify-content: center;

		font-size: 60px;
	}

	h1 {
		margin: 0;
		font-size: 42px;
	}

	h2 {
	margin: 8px 0 4px;
	font-size: 24px;
	color: #39d353;
}

.position {
	color: rgba(255, 255, 255, 0.85);
	font-size: 17px;
}
	p {
		color: rgba(255, 255, 255, 0.8);
		font-size: 18px;
	}

	.button-row {
		margin-top: 80px;

		display: flex;
		justify-content: space-between;
	}

	.home-btn,
	.edit-btn {
		background: #39d353;

		color: white;

		text-decoration: none;

		padding: 14px 28px;

		border-radius: 14px;

		font-weight: 600;

		transition: all 0.2s ease;
	}

	.home-btn:hover,
	.edit-btn:hover {
		background: #2db847;
		transform: translateY(-2px);
	}
</style>
