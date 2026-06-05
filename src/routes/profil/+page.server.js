import { connectToDatabase } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';
import { ObjectId } from 'mongodb';

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
		email: user?.email ?? 'Unbekannt',
		displayName: user?.displayName ?? 'Noch kein Anzeigename',
		favoritePosition: user?.favoritePosition ?? 'Noch keine Lieblingsposition'
	}
};
}