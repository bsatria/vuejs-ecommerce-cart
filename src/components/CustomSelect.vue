<template>
    <div class="radio-wrap">
        <div v-for="val in data" :key="val.name" class=""
         :class="['radio-container', { 'is__active': name == val.name }]"
        >
            <input type="radio" class="radio-button" :value="val.name"
            v-model="proxyChecked" />
            <div>
                <div class="title">{{val.name}}</div>
            <div
            :class="['value', { 'is__active': name == val.name }]"
            >{{val.value}}</div>
            </div>
            <img alt="check" v-if="name === val.name" src="../assets/check.svg">
        </div>
    </div>
</template>

<script>
export default {
  props: {
    data: [Array],
    name: [String],
  },
  computed: {
    proxyChecked: {
      get() {
        return this.name;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.radio-wrap{
    display flex
    font-size 14px
}
.radio-container
    display flex
    margin 0 20px
    position relative
    justify-content space-around
    flex-wrap wrap
    flex-direction row
    padding 20px 40px
    box-sizing border-box
    border 2px solid #CCCCCC
    img
     margin-left 30px
    &.is__active
        border 2px solid #1BD97B
        background-color #E9FCF2
    .value
        &.is__active
            font-weight bold
.radio-button
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    margin: 0;
    cursor: pointer;
</style>
