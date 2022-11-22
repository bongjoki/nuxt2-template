import Vue from 'vue';

export default () => {
  Vue.prototype.$alert = async (message, color) => {
    const { $dialog } = Vue.prototype;
    if (message) {
      await $dialog.alert({
        message,
        confirmButtonText: '확인',
        confirmButtonColor: color || '#f32d2d',
      });
    }
  };
};
