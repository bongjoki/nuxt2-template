import Vue from 'vue';
import moment from 'moment';

Vue.filter('toDateFormat', (text, format) => {
  if (text) {
    return moment(text).format(format);
  }
  return text;
});

Vue.filter('number', (text) => {
  if (text) {
    return Number(text).toLocaleString();
  }
  return text;
});
