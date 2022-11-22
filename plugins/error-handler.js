import Vue from 'vue';

export default () => {
  Vue.prototype.$error = (error, title, content) => {
    const { $dialog } = Vue.prototype;
    const iamportError = error.error_msg || null;
    const serverError = error.response ? error.response.data.message : null;
    const contentError = error ? error.message : null;
    const message = serverError || (iamportError ? (iamportError || contentError) : (contentError || content));
    if (message) $dialog.alert({ message, title, confirmButtonText: '확인' });
    console.error(error);
  };
};
