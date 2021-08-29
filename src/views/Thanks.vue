<template>
  <div class="thanks">
    <div class="wrap-thanks">
      <Thanks msg="Thank you"/>
      <Summary
          :qty="item.quantity"
          :courir="shipment.name"
          :isShipment="true"
          :payment-method="payment.name"
          :akumulate="akumulate"
          :dropship-fee="item.isDropshipper ? item.dropshipFee : 0"
          :courir-fee="shipment.value"
          :total="totalPrice"
          :hideButton="true"
        />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import Thanks from '@/components/Thanks.vue';
import Summary from '@/components/Summary.vue';

export default {
  name: 'Home',
  components: {
    Thanks,
    Summary,
  },
  computed: {
    ...mapState(['item']),
    ...mapState(['shipment']),
    ...mapState(['payment']),

    akumulate() {
      return this.akumulateItem();
    },
    totalPrice() {
      if (this.item.isDropshipper) {
        return this.akumulateItem() + this.item.dropshipFee + this.shipment.value;
      }
      return this.akumulateItem() + this.shipment.value;
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
.wrap-thanks
  display grid
  @media screen and (min-width: 768px)
    grid-template-columns: repeat(1, 1fr)
  @media screen and (min-width: 1000px)
    grid-template-columns 3fr 1fr
</style>
