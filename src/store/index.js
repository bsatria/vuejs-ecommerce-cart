import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';

const store = createStore({
  state: {
    item: {
      quantity: 10,
      courir: 'BOJEK',
      paymentMethod: 'e-Money',
      price: 50000,
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
    testASD(state) {
      state.item.price += 1;
    },
  },
  actions: {
    testASD({ commit }, message) {
      commit('testASD', message);
    },
  },
  modules: {
  },
  plugins: [createPersistedState()],
});

export default store;
