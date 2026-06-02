import { connectToDatabase } from '$lib/server/db';

export async function load() {
	const db = await connectToDatabase();

	const funfacts = await db.collection('funfacts').find({}).toArray();

	return {
		funfacts: funfacts.map((fact) => ({
			...fact,
			_id: fact._id.toString()
		}))
	};
}