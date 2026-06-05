import { fail, redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '$lib/server/db';

export async function load({ cookies }) {
	const userId = cookies.get('user');

	if (!userId) {
		throw redirect(302, '/login');
	}

	const db = await connectToDatabase();

	const posts = await db
		.collection('forumPosts')
		.find({})
		.sort({ createdAt: -1 })
		.toArray();

	return {
		posts: posts.map((post) => ({
			...post,
			_id: post._id.toString(),
			createdAt: post.createdAt?.toISOString()
		}))
	};
}

export const actions = {
	default: async ({ request, cookies }) => {
		const userId = cookies.get('user');

		if (!userId) {
			throw redirect(302, '/login');
		}

		const data = await request.formData();
		const title = data.get('title')?.toString().trim();
		const text = data.get('text')?.toString().trim();

		if (!title || !text) {
			return fail(400, {
				error: 'Bitte Titel und Beitrag ausfüllen.'
			});
		}

		const db = await connectToDatabase();

		const user = await db.collection('users').findOne({
			_id: new ObjectId(userId)
		});

		await db.collection('forumPosts').insertOne({
			title,
			text,
			authorEmail: user?.email ?? 'Unbekannt',
			authorName: user?.displayName ?? 'Unbekannt',
			createdAt: new Date()
		});

		return {
			success: 'Beitrag wurde veröffentlicht.'
		};
	}
};