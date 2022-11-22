export default async function ({ store, redirect, route }) {
  const { path, name } = route;
  const { me } = store.state.auth;
  const [, domain] = path.split('/');
  const isAdmin = domain === 'admin';
  if (path === '/') {
    // redirect('/user/home');
  }

  if (isAdmin) {
    // if (path === '/admin' && !me) {
    //   redirect('/admin/login');
    // }
    // if (path === '/admin') {
    //   redirect('/admin/store');
    // }
  }
}
