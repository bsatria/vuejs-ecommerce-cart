<template>
  <div class="shipment">
    <div class="shipment__wrap-title">
      <h1>{{ msg }}</h1>
    </div>
    <div class="shipment__wrap-form">
      <CustomSelect :name="shipment.name" v-model="shipment.name" :data="shipmentData"/>
    </div>
    <div class="shipment__wrap-title">
      <h1>{{ msg2 }}</h1>
    </div>
    <div class="shipment__wrap-form">
      <CustomSelect :name="payment.name" v-model="payment.name" :data="paymentData"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Shipment',
  props: {
    msg: String,
    msg2: String,
  },
  data() {
    return {
      shipmentData: [{
        name: 'Gosend',
        value: 15000,
      }, {
        name: 'JNE',
        value: 9000,
      }, {
        name: 'Personal Courir',
        value: 10000,
      }],
      paymentData: [{
        name: 'e-Wallet',
      }, {
        name: 'Bank Transfer',
      }, {
        name: 'Virtual Account',
      }],
    };
  },
  computed: {
    ...mapState(['shipment']),
    ...mapState(['payment']),
  },
  watch: {
    // eslint-disable-next-line func-names
    'shipment.name': function (val) {
      const find = this.shipmentData.find((res) => res.name === val);
      this.$store.dispatch('actionIsShipment', find);
    },
    // eslint-disable-next-line func-names
    'payment.name': function (val) {
      this.$store.dispatch('actionIsPayment', val);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.shipment
  @media screen and (min-width: 1000px)
    border-right 1px solid #FF8A00
    padding-right 30px
.shipment__wrap-title
  width 30%
</style>
