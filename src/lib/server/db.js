import { MongoClient } from 'mongodb';
import { env } from '$env/dynamic/private';

const uri = env.MONGODB_URI;
const dbName = env.MONGODB_DB || 'fussballregeln';

if (!uri) {
	throw new Error('MONGODB_URI fehlt in Netlify Environment Variables');
}

let client;
let db;

export async function connectToDatabase() {
	if (db) return db;

	client = new MongoClient(uri);
	await client.connect();

	db = client.db(dbName);
	return db;
}