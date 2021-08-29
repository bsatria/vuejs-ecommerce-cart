<template>
  <div class="thanks">
    <div class="thanks__wrap-title">
      <h1>{{ msg }}</h1>
      <h4>Order ID : {{generateID(5)}}</h4>
      <p>Your order will be delivered today with {{shipment.name}}</p>
      <BackButton text="Back to home" :onclick="redirect"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Thanks',
  props: {
    msg: String,
  },
  computed: {
    ...mapState(['shipment']),

  },
  methods: {
    redirect() {
      this.$router.push('/');
    },
    generateID(length) {
      let result = '';
      const characters = 'ABCDEFGHJKLMNOPQRSTUVWXYZabcdefghjklmnpqrstuvwxyz23456789';
      const charactersLength = characters.length;
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
      }
      return result;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.thanks
  display flex
  @media screen and (min-width: 1000px)
    border-right 1px solid #FF8A00
    padding-right 30px
.thanks__wrap-title
  margin: 0 auto;
  text-align left
  display: flex;
  justify-content: center;
  flex-direction column
</style>
