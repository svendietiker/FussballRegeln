import { MongoClient } from 'mongodb';
import { MONGODB_URI, MONGODB_DB } from '$env/static/private';

const client = new MongoClient(MONGODB_URI);

let db;

export async function connectToDatabase() {
	if (!db) {
		await client.connect();
		db = client.db(MONGODB_DB);
	}

	return db;
}