import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state: {
    item: {
      quantity: 10,
      courir: 'BOJEK',
      paymentMethod: 'e-Money',
      price: 50000,
      isDropshipper: false,
      dropshipFee: 5900,
      courirFee: 15000,
    },
    user: {
      email: '',
      phone: '',
      deliveryAddress: '',
    },
    dropshipper: {
      name: '',
      phone: '',
    },
  },
  mutations: {
    actionIsDropshipper(state, val) {
      state.item.isDropshipper = val;
    },
  },
  actions: {
    actionIsDropshipper({ commit }, val) {
      commit('actionIsDropshipper', val);
    },
  },
  modules: {
  },
  plugins: [createPersistedState()],
});

export default store;
