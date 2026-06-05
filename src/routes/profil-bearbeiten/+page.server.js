import { fail, redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';
import { connectToDatabase } from '$lib/server/db';

export async function load({ cookies }) {
	const userId = cookies.get('user');

	if (!userId) {
		throw redirect(302, '/login');
	}

	const db = await connectToDatabase();

	const user = await db.collection('users').findOne({
		_id: new ObjectId(userId)
	});

	return {
		user: {
			email: user?.email ?? '',
			displayName: user?.displayName ?? '',
			favoritePosition: user?.favoritePosition ?? ''
		}
	};
}

export const actions = {
	default: async ({ request, cookies }) => {
		const userId = cookies.get('user');

		if (!userId) {
			throw redirect(302, '/login');
		}

		const data = await request.formData();

		const displayName = data.get('displayName')?.toString().trim();
		const favoritePosition = data.get('favoritePosition')?.toString().trim();

		if (!displayName) {
			return fail(400, {
				error: 'Bitte gib einen Anzeigenamen ein.'
			});
		}

		const db = await connectToDatabase();

		await db.collection('users').updateOne(
			{ _id: new ObjectId(userId) },
			{
				$set: {
					displayName,
					favoritePosition,
					updatedAt: new Date()
				}
			}
		);

		return {
			success: 'Profil wurde gespeichert.'
		};
	}
};