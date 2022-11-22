export default async ({ app, store, route: { path }, redirect }) => {
  let tokenKey = 'token';
  const [, domain] = path.split('/');
  const isAdmin = domain === 'admin';
  if (isAdmin) tokenKey = 'admin-token';
  try {
    const token = app.$cookies.get(tokenKey);
    if (token) {
      if (tokenKey === 'admin-token') {
        await store.dispatch('auth/adminLogin');
        return;
      }
      if (tokenKey === 'token') {
        await store.dispatch('auth/userLogin');
        return;
      }
    }
  } catch (e) {
    console.error(e);
    app.$cookies.remove(tokenKey);
  }
};
