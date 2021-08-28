<template>
  <div class="thanks">
    <div class="thanks__wrap-title">
      <h1>{{ msg }}</h1>
    </div>
    <div class="thanks__wrap-form">
    </div>
  </div>
</template>

<script>

export default {
  name: 'Thanks',
  props: {
    msg: String,
  },
  data() {
    return {
      isDropshipper: true,
    };
  },
  watch: {
    isDropshipper(val) {
      console.log(val);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.thanks
  @media screen and (min-width: 1000px)
    border-right 1px solid #FF8A00
    padding-right 30px
.thanks__wrap-title
  display flex
  flex-wrap wrap
  align-items center
  justify-content: space-between
  @media screen and (max-width:768px)
   margin-bottom 40px
.thanks__wrap-form
  display grid
  @media screen and (min-width: 1000px)
    grid-template-columns 1fr 1fr
    grid-column-gap 3%
</style>
