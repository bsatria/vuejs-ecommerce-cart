<template>
  <div class="home">
    <BackButton text="Back to cart" :onclick="test"/>
    <div class="wrap-delivery">
      <Delivery msg="Delivery details"/>
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
import Delivery from '@/components/Delivery.vue';
import Summary from '@/components/Summary.vue';

export default {
  name: 'Home',
  components: {
    Delivery,
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
.wrap-delivery
  display grid
  @media screen and (min-width: 768px)
    grid-template-columns: repeat(1, 1fr)
  @media screen and (min-width: 1000px)
    grid-template-columns 3fr 1fr
</style>
