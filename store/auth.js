export const state = () => ({
  me: null,
});

export const mutations = {
  SET_ME(state, me) {
    state.me = me;
  },
  SET_IS_ADMIN(state, isAdmin) {
    state.me = { ...state.me, isAdmin };
  },
};

export const actions = {
  async userLogin({ commit }) {
    const { data } = await this.$axios.get('/user/me');
    commit('SET_ME', data);
    return data;
  },
  userLogout({ commit }) {
    this.$cookies.remove('token');
    commit('SET_ME', null);
  },
  async adminLogin({ commit }) {
    const { data } = await this.$axios.get('/admin/me');
    commit('SET_ME', data);
    return data;
  },
  adminLogout({ commit }) {
    this.$cookies.remove('admin-token');
    commit('SET_ME', null);
  },
};
