import { error } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/server/db';

export async function load({ params }) {
	const db = await connectToDatabase();

	const rule = await db.collection('rules').findOne({
		category: params.category,
		slug: params.slug
	});

	if (!rule) {
		throw error(404, 'Regel nicht gefunden');
	}

	return {
		rule: {
			...rule,
			_id: rule._id.toString()
		}
	};
}