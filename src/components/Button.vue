<template>
  <button class="button button__primary" @click="onclick">
    <div class="text">{{ text }}</div>
  </button>
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
.button
    width: 100%;
    height: 60px;
    border none
    left: 870px;
    top: 525px;
    display flex
    justify-content center
    align-items center
    font-weight: 500;
    font-size: 18px;
    line-height: 21px;
    cursor pointer
    color: #FFFFFF;
    &.button__primary
        background-color #FF8A00
.text
    font-size 14px
    line-height 16px
</style>
