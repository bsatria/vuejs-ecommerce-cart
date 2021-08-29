<template>
    <div class="wrap-checkbox">
        <input
            type="checkbox" id="styled-checkbox-1"
            :value="value"
            v-model="proxyChecked">
        <label for="styled-checkbox-1"><div>{{label}}</div></label>
    </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    checked: {
      type: [Array, Boolean],
    },
    value: [Array, Boolean],
  },
  computed: {
    proxyChecked: {
      get() {
        return this.checked;
      },
      set(val) {
        this.$emit('update:modelValue', val);
      },
    },
  },
};
</script>

<style lang="stylus" scoped>
.wrap-checkbox
    display flex
    align-items center

input
    margin-right 10px

label
    font-weight: 500
    font-size: 14px
    line-height: 16px
    color: #2D2A40

input[type=checkbox]{
    display none
}

input[type=checkbox] + label {
    display: flex
    cursor: pointer
    align-items center
}

input[type=checkbox] + label:before {
  content: "\2714"
  border: 0.2em solid #1BD97B
  display: inline-block
  width: 1em
  height: 1em
  padding-left: 0.2em
  padding-bottom: 0.3em
  margin-right: 0.7em
  vertical-align: bottom
  color: transparent
  transition: .2s
}

input[type=checkbox] + label:active:before {
  transform: scale(0)
}

input[type=checkbox]:checked + label:before {
  background-color: MediumSeaGreen
  border-color: MediumSeaGreen
  color: #fff
}

input[type=checkbox]:disabled + label:before {
  transform: scale(1)
  border-color: #aaa
}

input[type=checkbox]:checked:disabled + label:before {
  transform: scale(1)
  background-color: #bfb
  border-color: #bfb
}
</style>
