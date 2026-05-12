import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

const client = new MongoClient(env.MONGODB_URI);

let db;

export async function connectToDatabase() {
	if (!db) {
		await client.connect();
		db = client.db('fussballregeln');
	}

	return db;
}