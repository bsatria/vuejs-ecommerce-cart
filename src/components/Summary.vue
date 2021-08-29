<template>
    <div class="summary">
        <div class="summary__purchase-section">
          <h3>Summary</h3>
          <div class="desc">{{qty}} Items purchased</div>
        </div>
        <div class="summary__delivery-section" style="margin-bottom:30px;"  v-if="isShipment">
          <div class="desc">Delivery estimation</div>
          <div class="b-desc">today by {{courir}}</div>
        </div>
        <div class="summary__delivery-section" v-if="isShipment">
          <div class="desc">Payment method</div>
          <div class="b-desc">{{paymentMethod}}</div>
        </div>
        <div class="summary__end-section" style="margin-top: 80px;">
          <div class="desc">Cost of goods</div>
          <div class="bold">{{akumulate}}</div>
        </div>
        <div class="summary__end-section">
          <div class="desc">Dropshipping Fee</div>
          <div class="bold">{{dropshipFee}}</div>
        </div>
        <div class="summary__end-section"  v-if="isShipment">
          <div class="desc">{{courir}} shipment</div>
          <div class="bold">{{courirFee}}</div>
        </div>
        <div class="summary__total-section">
          <h3>Total</h3>
          <h3>{{ total }}</h3>
        </div>
        <Button
          v-if="!hideButton"
          :text="textButton"
          :onclick="test"
        />
    </div>
</template>

<script>
export default {
  props: {
    courir: { type: String, default: '' },
    paymentMethod: { type: String, default: '' },
    textButton: { type: String, default: '' },
    akumulate: { type: Number, default: 0 },
    dropshipFee: { type: Number, default: 0 },
    courirFee: { type: Number, default: 0 },
    total: { type: Number, default: 0 },
    isShipment: { type: Boolean, default: false },
    hideButton: { type: Boolean, default: false },
    qty: { type: Number, default: 0 },
  },
  data() {
    return {
      key: [],
    };
  },
};
</script>

<style lang="stylus" scoped>
.summary
  padding 0px 20px
.summary__purchase-section
  margin-bottom 20px
.summary__delivery-section
  padding-top 20px
  border-top 1px solid #D8D8D8
  .b-desc
    font-size 16px
    color #1BD97B
    font-weight bold
.summary__end-section
  margin 10px 0
  font-size 14px
  display flex
  justify-content space-between
.bold
  font-weight bold
.summary__total-section
  display flex
  justify-content space-between

</style>
