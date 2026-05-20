import { fail, redirect } from '@sveltejs/kit';
import bcrypt from 'bcryptjs';
import { connectToDatabase } from '$lib/server/db';

export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString().toLowerCase();
		const password = data.get('password')?.toString();

		if (!email || !password) {
			return fail(400, { error: 'Bitte E-Mail und Passwort eingeben.' });
		}

		if (password.length < 6) {
			return fail(400, { error: 'Das Passwort muss mindestens 6 Zeichen haben.' });
		}

		const db = await connectToDatabase();

		const existingUser = await db.collection('users').findOne({ email });

		if (existingUser) {
			return fail(400, { error: 'Diese E-Mail ist bereits registriert.' });
		}

		const hashedPassword = await bcrypt.hash(password, 10);

		await db.collection('users').insertOne({
			email,
			password: hashedPassword,
			createdAt: new Date()
		});

		return {
			success: 'Registrierung erfolgreich. Du kannst dich jetzt einloggen.'
		};
	},

	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = data.get('email')?.toString().toLowerCase();
		const password = data.get('password')?.toString();

		if (!email || !password) {
			return fail(400, { error: 'Bitte E-Mail und Passwort eingeben.' });
		}

		const db = await connectToDatabase();

		const user = await db.collection('users').findOne({ email });

		if (!user) {
			return fail(400, { error: 'E-Mail oder Passwort ist falsch.' });
		}

		const passwordIsCorrect = await bcrypt.compare(password, user.password);

		if (!passwordIsCorrect) {
			return fail(400, { error: 'E-Mail oder Passwort ist falsch.' });
		}

		cookies.set('user', user._id.toString(), {
			path: '/',
			httpOnly: true,
			sameSite: 'strict',
			secure: true,
			maxAge: 60 * 60 * 24
		});

		throw redirect(303, '/');
	}
};