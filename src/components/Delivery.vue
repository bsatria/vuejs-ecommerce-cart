<template>
  <div class="delivery">
    <div class="delivery__wrap-title">
      <h1>{{ msg }}</h1>
      <Checkbox
        label="Send as dropshipper"
        v-model="isDropshipper"/>
    </div>
    <div class="delivery__wrap-form">
      <Input
        type="text"
        placeholder="ex bagassatria040@gmail.com"
        v-model="isDropshipper"
        label="Email"/>
      <Input
        type="text"
        placeholder="bagas"
        label="Dropshipper Name"/>
      <Input
        type="number"
        placeholder="0823123123"
        label="Phone Number"/>
      <Input
        type="number"
        placeholder="0823123123"
        label="Dropshipper Phone Number"/>
      <TextArea
        v-model="isDropshipper"
        label="Delivery Address"/>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Delivery',
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
.delivery
  @media screen and (min-width: 1000px)
    border-right 1px solid #FF8A00
    padding-right 30px
.delivery__wrap-title
  display flex
  flex-wrap wrap
  align-items center
  justify-content: space-between
  @media screen and (max-width:768px)
   margin-bottom 40px
.delivery__wrap-form
  display grid
  @media screen and (min-width: 1000px)
    grid-template-columns 1fr 1fr
    grid-column-gap 3%
</style>
