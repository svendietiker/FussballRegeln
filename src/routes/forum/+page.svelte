<script>
	let { data, form } = $props();
</script>

<section class="forum-page">
	<div class="forum-card">
		<h1>Forum</h1>
		<p class="subtitle">Tausche dich über Fussballregeln und Spielsituationen aus.</p>

		{#if form?.error}
			<p class="error">{form.error}</p>
		{/if}

		{#if form?.success}
			<p class="success">{form.success}</p>
		{/if}

		<form method="POST" action="?/createPost" class="post-form">
			<label>
				Titel
				<input name="title" type="text" placeholder="z.B. War das wirklich Abseits?" required />
			</label>

			<label>
				Beitrag
				<textarea
					name="text"
					rows="5"
					placeholder="Schreibe deine Frage oder Meinung..."
					required
				></textarea>
			</label>

			<button type="submit">Beitrag veröffentlichen</button>
		</form>
	</div>

	<div class="posts">
		<h2>Aktuelle Beiträge</h2>

		{#if data.posts.length > 0}
			{#each data.posts as post}
				<article class="post">
					<h3>{post.title}</h3>
					<p class="text">{post.text}</p>
					<p class="meta">
						Von {post.authorName} · {post.authorEmail}
					</p>

					<div class="comments">
						<h4>Kommentare</h4>

						{#if post.comments.length > 0}
							{#each post.comments as comment}
								<div class="comment">
									<p>{comment.text}</p>
									<span>Von {comment.authorName} · {comment.authorEmail}</span>
								</div>
							{/each}
						{:else}
							<p class="no-comments">Noch keine Kommentare.</p>
						{/if}

						<form method="POST" action="?/addComment" class="comment-form">
							<input type="hidden" name="postId" value={post._id} />

							<textarea
								name="commentText"
								rows="3"
								placeholder="Antwort schreiben..."
								required
							></textarea>

							<button type="submit">Antworten</button>
						</form>
					</div>
				</article>
			{/each}
		{:else}
			<p>Noch keine Beiträge vorhanden.</p>
		{/if}
	</div>
</section>

<style>
	.forum-page {
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

	.forum-card,
	.posts {
		max-width: 900px;
		background: rgba(0, 0, 0, 0.45);
		backdrop-filter: blur(10px);
		padding: 40px;
		border-radius: 20px;
		border: 1px solid rgba(255, 255, 255, 0.1);
		box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
		margin-bottom: 30px;
	}

	h1 {
		font-size: 42px;
		margin: 0 0 8px;
	}

	.subtitle,
	.meta {
		color: rgba(255, 255, 255, 0.75);
	}

	.post-form {
		display: flex;
		flex-direction: column;
		gap: 18px;
		margin-top: 28px;
	}

	label {
		display: flex;
		flex-direction: column;
		font-weight: 600;
	}

	input,
	textarea {
		margin-top: 8px;
		padding: 14px;
		border-radius: 12px;
		border: none;
		font-size: 16px;
		font-family: Arial, sans-serif;
		background: rgba(255, 255, 255, 0.95);
	}

	button {
		align-self: flex-start;
		background: #39d353;
		color: white;
		border: none;
		padding: 14px 28px;
		border-radius: 14px;
		font-weight: 700;
		cursor: pointer;
	}

	button:hover {
		background: #2db847;
	}

	.post {
		background: rgba(255, 255, 255, 0.08);
		padding: 24px;
		border-radius: 16px;
		margin-top: 18px;
	}

	.post h3 {
		margin-top: 0;
		color: #39d353;
	}

	.text {
		color: rgba(255, 255, 255, 0.9);
	}

	.comments {
		margin-top: 24px;
		padding-top: 18px;
		border-top: 1px solid rgba(255, 255, 255, 0.12);
	}

	.comments h4 {
		color: #39d353;
		margin-bottom: 12px;
	}

	.comment {
		background: rgba(255, 255, 255, 0.08);
		padding: 14px;
		border-radius: 12px;
		margin-bottom: 12px;
	}

	.comment p {
		margin: 0 0 6px;
		color: rgba(255, 255, 255, 0.9);
	}

	.comment span,
	.no-comments {
		color: rgba(255, 255, 255, 0.65);
		font-size: 14px;
	}

	.comment-form {
		margin-top: 16px;
		display: flex;
		flex-direction: column;
		gap: 12px;
	}

	.comment-form textarea {
		padding: 14px;
		border-radius: 12px;
		border: none;
		font-size: 15px;
		font-family: Arial, sans-serif;
		background: rgba(255, 255, 255, 0.95);
	}

	.comment-form button {
		align-self: flex-start;
	}

	.error {
		color: #ff6b6b;
	}

	.success {
		color: #39d353;
	}
</style>