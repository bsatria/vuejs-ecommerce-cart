<template>
  <div class="shipment">
    <BackButton text="Back to delivery" :onclick="redirect"/>
    <div class="wrap-shipment">
      <Shipment msg="Shipment" msg2="Payment"/>
      <Summary
          :qty="item.quantity"
          :courir="shipment.name"
          :isShipment="true"
          :onclickbutton="submitForm"
          :payment-method="payment.name"
          :akumulate="akumulate"
          :dropship-fee="item.isDropshipper ? item.dropshipFee : 0"
          :courir-fee="shipment.value"
          :total="totalPrice"
          :textButton="`Payment with ${payment.name}`"
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
  methods: {
    akumulateItem() {
      return this.item.quantity * this.item.price;
    },
    redirect() {
      this.$router.push('/');
    },
    submitForm() {
      this.$router.push('Thanks');
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
