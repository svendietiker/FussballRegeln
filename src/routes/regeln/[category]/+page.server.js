import { connectToDatabase } from '$lib/server/db';

export async function load({ params }) {
	const db = await connectToDatabase();

	const rules = await db
		.collection('rules')
		.find({ category: params.category })
		.toArray();

	return {
		category: params.category,
		rules: rules.map((rule) => ({
			...rule,
			_id: rule._id.toString()
		}))
	};
}