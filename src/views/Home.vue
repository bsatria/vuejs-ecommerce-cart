<template>
  <div class="home">
    <BackButton text="Back to cart"/>
    <div class="wrap-delivery">
      <Delivery ref="deliveryDetail" msg="Delivery details"/>
      <Summary
          :qty="item.quantity"
          :courir="item.courir"
          :payment-method="item.paymentMethod"
          :akumulate="akumulate"
          :dropship-fee="item.isDropshipper ? item.dropshipFee : 0"
          :courir-fee="item.courirFee"
          :onclickbutton="submitForm"
          textButton="Continue to payment"
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
  props: {
    onclick: Function,
  },
  computed: {
    ...mapState(['item']),
    akumulate() {
      return this.akumulateItem();
    },
    totalPrice() {
      if (this.item.isDropshipper) {
        return this.akumulateItem() + this.item.dropshipFee;
      }
      return this.akumulateItem();
    },
  },
  mounted() {
    console.log();
  },
  methods: {
    akumulateItem() {
      return this.item.quantity * this.item.price;
    },
    submitForm() {
      this.$refs.deliveryDetail.submitForm();
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
