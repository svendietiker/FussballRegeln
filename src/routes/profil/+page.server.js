import { connectToDatabase } from '$lib/server/db';
import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	const userId = cookies.get('user');

	if (!userId) {
		throw redirect(302, '/login');
	}

	const db = await connectToDatabase();

	const user = await db.collection('users').findOne({
		_id: userId
	});

	return {
		email: user?.email ?? 'Unbekannt'
	};
}