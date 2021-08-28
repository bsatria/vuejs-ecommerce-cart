<template>
    <div class="material_input">
      <label id="mla">{{label}}</label>
      <textarea
        @keyup="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :disabled="disable"
        />
      <div class="description">{{count}} characters left</div>
      <span class="highlight"></span>
      <span class="bar"></span>
    </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    placeholder: { type: String },
    count: { type: Number, default: 0 },
    disable: { type: Boolean, default: false },
  },
};
</script>

<style lang="stylus" scoped>
.material_input
  position  relative
  margin-bottom 45px
  margin-top  12px
textarea
  font-size 15px
  padding 10px 10px 10px 5px
  display block
  width 95%
  border none
  border 2px solid #CCCCCC
  border-radius  0px
textarea:focus
  outline none
textarea:focus-visible
  outline none
label
  color #999
  font-size 14px
  font-weight normal
.description
  color #999
  font-size 12px
  font-weight normal
  margin-top  5px
  text-align  right
</style>
