<template>
  <div class="shipment">
    <BackButton text="Back to delivery" :onclick="test"/>
    <div class="wrap-shipment">
      <Shipment msg="Shipment"/>
      <Summary
          :qty="item.quantity"
          :courir="item.courir"
          :payment-method="item.paymentMethod"
          :akumulate="akumulate"
          :dropship-fee="item.dropshipFee"
          :courir-fee="item.courirFee"
          :total="totalPrice"
        />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import Shipment from '@/components/Shipment.vue';
import Summary from '@/components/Summary.vue';

export default {
  name: 'Home',
  components: {
    Shipment,
    Summary,
  },
  computed: {
    ...mapState(['item']),
    akumulate() {
      return this.akumulateItem();
    },
    totalPrice() {
      return this.akumulateItem() + this.item.dropshipFee + this.item.courirFee;
    },
  },
  mounted() {
    console.log();
  },
  methods: {
    akumulateItem() {
      return this.item.quantity * this.item.price;
    },
    test() {
      this.$store.dispatch('testASD');
      console.log('object');
    },
  },
};
</script>

<style lang="stylus" scoped>
.wrap-shipment
  display grid
  @media screen and (min-width: 768px)
    grid-template-columns: repeat(1, 1fr)
  @media screen and (min-width: 1000px)
    grid-template-columns 3fr 1fr
</style>
