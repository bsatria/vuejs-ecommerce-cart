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
    shipment: {
      name: 'Gosend',
      value: 15000,
    },
    payment: {
      name: 'e-Wallet',
    },
  },
  mutations: {
    actionIsDropshipper(state, val) {
      if (!val) {
        state.dropshipper = {
          name: '',
          phone: '',
        };
      }
      state.item.isDropshipper = val;
    },
    actionIsShipment(state, val) {
      state.shipment.name = val.name;
      state.shipment.value = val.value;
    },
    actionIsPayment(state, val) {
      state.payment.name = val;
    },
    actionChangeForm(state, data) {
      state.user = data.user;
      state.dropshipper = data.dropshipper;
    },
  },
  actions: {
    actionIsDropshipper({ commit }, val) {
      commit('actionIsDropshipper', val);
    },
    actionIsShipment({ commit }, val) {
      commit('actionIsShipment', val);
    },
    actionIsPayment({ commit }, val) {
      commit('actionIsPayment', val);
    },
    actionChangeForm({ commit }, data) {
      commit('actionChangeForm', data);
    },
  },
  modules: {
  },
  plugins: [createPersistedState()],
});

export default store;
