import { error } from '@sveltejs/kit';
import { connectToDatabase } from '$lib/server/db';

export async function load({ params }) {
	const db = await connectToDatabase();

	const fact = await db.collection('funfacts').findOne({
		slug: params.slug
	});

	if (!fact) {
		throw error(404, 'Fun Fact nicht gefunden');
	}

	return {
		fact: {
			...fact,
			_id: fact._id.toString()
		}
	};
}