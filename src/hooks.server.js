export async function handle({ event, resolve }) {
	const userId = event.cookies.get('user');

	if (userId) {
		event.locals.user = {
			id: userId
		};
	} else {
		event.locals.user = null;
	}

	return resolve(event);
}