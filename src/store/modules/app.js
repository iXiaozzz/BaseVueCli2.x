const app = {
  state: {
    pageType: 'FullPage',
    count: 20
  },
  mutations: {
    JIAN_COUNT: (state, data) => {
      state.count--
    },
    ADD_COUNT: (state, data) => {
      state.count++
    },
    UPDATE_PAGETYPE: (state, data) => {
      state.pageType = data;
    }
  },
  actions: {
    jianCount ({ commit }, data) {
      commit('JIAN_COUNT', data)
    },
    addCount ({ commit }, data) {
      commit('ADD_COUNT', data)
    },
    updatePageType ({ commit }, data) {
      commit('UPDATE_PAGETYPE', data);
    }
  }
}

export default app;
