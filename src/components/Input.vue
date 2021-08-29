<template>
    <div class="b-input">
      <input
        :type="type"
        :placeholder="placeholder"
        :value="value"
        @keyup="$emit('update:modelValue', $event.target.value), onchange($event.target.value)"
        :class="stateForm"
        :disabled="disable">
      <span class="b-input__highlight"></span>
      <span class="b-input__bar"></span>
      <label id="mla" :class="stateForm">
        {{label}}
      </label>
      <span class="b-input__error"
        v-if="errorMessage != '' && errorMessage != 'correct' && !disable">
        {{errorMessage}}
      </span>
    </div>
</template>

<script>
export default {
  props: {
    label: { type: String, required: true },
    type: { type: String, required: true },
    disable: { type: Boolean, default: false },
    placeholder: { type: String, required: true },
    onchange: { type: Function },
    errorMessage: { type: String, default: '' },
    value: { type: String, default: '' },
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
<style scoped>
.b-input
{
  position: relative;
  margin-bottom:45px;
  margin-top: 12px;
}

.b-input__error{
  color: #FF8A00;
  font-size: 12px;
  font-weight: bold;
  position: absolute;
  bottom: -20px;
}

input
{
  font-size:15px;
  padding:10px 10px 10px 5px;
  display:block;
  box-sizing: border-box;
  width:100%;
  border:none;
  border:2px solid #CCCCCC;
  border-radius: 0px;
}
input.input__error{
  border:2px solid #FF8A00;
}
input.input__correct{
  border:2px solid #1BD97B;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #CCCCCC;
  opacity: 1; /* Firefox */
}

input:focus
{
  outline:none;
}

label
{
  font-weight:normal;
  position:absolute;
  font-size:14px;
  color:#999999;
  top:-20px;
}

label.input__error{
  color:#FF8A00;
}

.b-input__bar
{
  position:relative;
  display:block;
  max-width:400px;
}

.b-input__bar:before, .b-input__bar:after
{
  content:'';
  height:2px;
  width:0;
  bottom:1px;
  position:absolute;
  background:#999999;
  transition:0.2s ease all;
  -moz-transition:0.2s ease all;
  -webkit-transition:0.2s ease all;
}

.b-input__bar:before
{
  left:50%;
}

.b-input__bar:after
{
  right:50%;
}

input:focus ~ .b-input__bar:before, input:focus ~ .b-input__bar:after
{
  width:50%;
}

.b-input__highlight
{
  position:absolute;
  height:60%;
  width:325px;
  top:25%;
  left:0;
  pointer-events:none;
  opacity:0.5;
}

input:focus ~ .b-input__highlight
{
  -webkit-animation:inputlighter 0.3s ease;
  -moz-animation:inputlighter 0.3s ease;
  animation:inputlighter 0.3s ease;
}

@-webkit-keyframes inputlighter
{
    from
  {
    background:#999999;
  }
  to
  {
    width:0; background:transparent;
  }
}

@-moz-keyframes inputlighter
{
    from
  {
    background:#999999;
  }
  to
  {
   width:0; background:transparent;
  }
}
@keyframes inputlighter
{
    from
  {
    background:#999999;
  }
  to
  {
    width:0; background:transparent;
  }
}
</style>
