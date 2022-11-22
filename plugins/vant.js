import Vue from 'vue';
import Vant, { Locale, Toast, Dialog } from 'vant';
import en from 'vant/lib/locale/lang/en-US';
import 'vant/lib/index.css';

export default () => {
  Toast.allowMultiple();
  Locale.use('en-US', en);
  Vue.use(Vant);
};
