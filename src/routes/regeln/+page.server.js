import { connectToDatabase } from '$lib/server/db';

export async function load() {
	const db = await connectToDatabase();

	const rules = await db.collection('rules').find({}).toArray();

	const categories = [...new Set(rules.map((rule) => rule.category))];

	return {
		categories
	};
}