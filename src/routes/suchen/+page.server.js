import { connectToDatabase } from '$lib/server/db';

export async function load({ url }) {
	const query = url.searchParams.get('q') || '';

	const db = await connectToDatabase();

	let results = [];

	if (query.trim()) {
		results = await db
			.collection('rules')
			.find({
				$or: [
					{ title: { $regex: query, $options: 'i' } },
					{ shortDescription: { $regex: query, $options: 'i' } },
					{ explanation: { $regex: query, $options: 'i' } },
					{ category: { $regex: query, $options: 'i' } }
				]
			})
			.toArray();
	}

	return {
		query,
		results: results.map((rule) => ({
			...rule,
			_id: rule._id.toString()
		}))
	};
}