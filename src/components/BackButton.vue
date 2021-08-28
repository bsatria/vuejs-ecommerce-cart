<template>
    <div class="wrap-back-button" @click="onclick">
        <img alt="Vue logo" src="../assets/arrow_back.svg">
        <div class="text">{{text}}</div>
    </div>
</template>

<script>
export default {
  name: 'BackButton',
  props: {
    text: String,
    onclick: Function,
  },
};
</script>

<style lang="stylus" scoped>
img
    margin-right 10px
.wrap-back-button
    display flex
    cursor pointer
.text
    font-size 14px
    line-height 16px

</style>
