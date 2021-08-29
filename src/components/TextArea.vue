<template>
    <div class="material_input">
      <label id="mla"
      :class="[{ 'label__error': errorMessage != '' && errorMessage != 'correct' }]">
      {{label}}</label>
      <textarea
        @keyup="$emit('update:modelValue', $event.target.value), onchange($event.target.value)"
        :value="value"
        :class="stateForm"
        :placeholder="placeholder"
        :disabled="disable"
        />
      <div class="description">{{count}} characters left</div>
      <span class="highlight"></span>
      <span class="bar"></span>
      <span class="textarea__error-message"
      v-if="errorMessage != '' && errorMessage != 'correct'">{{errorMessage}}</span>
    </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    placeholder: { type: String },
    count: { type: Number, default: 0 },
    onchange: { type: Function },
    value: { type: String, default: '' },
    disable: { type: Boolean, default: false },
    errorMessage: { type: String, default: '' },
  },
  computed: {
    stateForm() {
      if (this.errorMessage === 'correct') {
        return 'input__correct';
      }
      if (this.errorMessage !== '' && !this.disable) {
        return 'input__error';
      }
      return '';
    },
  },
};
</script>

<style lang="stylus" scoped>
.material_input
  position  relative
  margin-bottom 45px
  margin-top  12px
.textarea__error-message
  color: #FF8A00;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  bottom: 0px;
textarea
  font-size 15px
  padding 10px 10px 10px 5px
  display block
  margin-top 5px
  width 95%
  border none
  border 2px solid #CCCCCC
  border-radius  0px
  &.textarea__error
    border 2px solid #FF8A00
textarea:focus
  outline none
textarea:focus-visible
  outline none
label
  color #999
  font-size 14px
  margin-bottom 5px
  font-weight normal
  &.label__error
    color #FF8A00
.description
  color #999
  font-size 12px
  font-weight normal
  margin-top  5px
  text-align  right
</style>
