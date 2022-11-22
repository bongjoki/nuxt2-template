import Vue from 'vue';
import { Swiper, SwiperSlide, directives } from 'vue-awesome-swiper';
import 'swiper/css/swiper.css';

export default () => {
  Vue.component('Swiper', Swiper);
  Vue.component('SwiperSlide', SwiperSlide);
  Vue.directive(directives);
};
