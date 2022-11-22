import https from 'https';

export default ({ app, route: { path }, $axios }) => {
  try {
    $axios.defaults.timeout = 100000;
    $axios.onRequest((config) => {
      let tokenKey = 'token';
      const options = { path: '/' };
      if (path.indexOf('/admin') === 0) tokenKey = 'admin-token';
      const token = app.$cookies.get(tokenKey, options);
      if (token) config.headers.Authorization = `Bearer ${token}`;
      config.httpsAgent = new https.Agent({
        rejectUnauthorized: false,
      });
      return config;
    });
  } catch (e) {
    console.error(e);
  }
};
