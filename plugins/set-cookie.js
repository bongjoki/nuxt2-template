import Vue from 'vue';
import moment from 'moment';

export default ({ app }) => {
  Vue.prototype.$setCookie = async (name, value) => {
    const maxAge = 3600 * 24 * 365;
    const expires = moment().add(maxAge, 'seconds').toDate();
    app.$cookies.set(name, value, {
      expires,
      maxAge,
      path: '/',
    });
  };
};
