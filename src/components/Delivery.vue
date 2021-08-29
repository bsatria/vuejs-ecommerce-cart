<template>
  <div class="delivery">
    <div class="delivery__wrap-title">
      <h1>{{ msg }}</h1>
      <Checkbox
        label="Send as dropshipper"
        :checked="item.isDropshipper"
        :value="item.isDropshipper"
        v-model="item.isDropshipper"/>
    </div>
    <div class="delivery__wrap-form">
      <Input
        type="text"
        placeholder="ex bagassatria040@gmail.com"
        :error-message="errMessageUserEmail"
        v-model="user.email"
        :value="user.email"
        :onchange="onChangeForm"
        label="Email"/>
      <Input
        type="text"
        placeholder="bagas"
        v-model="dropshipper.name"
        :value="dropshipper.name"
        :error-message="errMessageDropshipperName"
        :onchange="onChangeForm"
        :disable="!item.isDropshipper"
        label="Dropshipper Name"/>
      <Input
        type="text"
        v-model="user.phone"
        :value="user.phone"
        :onchange="onChangeForm"
        :error-message="errMessageUserPhone"
        placeholder="0823123123"
        label="Phone Number"/>
      <Input
        type="text"
        v-model="dropshipper.phone"
        :onchange="onChangeForm"
        :value="dropshipper.phone"
        placeholder="0823123123"
        :error-message="errMessageDropshipperPhone"
        :disable="!item.isDropshipper"
        label="Dropshipper Phone Number"/>
      <TextArea
        :onchange="onChangeForm"
        :error-message="errMessageUserAddress"
        :value="user.deliveryAddress"
        v-model="user.deliveryAddress"
        :count="130 - user.deliveryAddress.length"
        label="Delivery Address"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import {
  required, email, minLength, maxLength,
} from '@vuelidate/validators';
import { useVuelidate } from '@vuelidate/core';

export default {
  name: 'Delivery',
  props: {
    msg: String,
  },
  setup: () => ({ validate: useVuelidate() }),
  validations() {
    return {
      user: {
        email: {
          required,
          email,
        },
        phone: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(20),
        },
        deliveryAddress: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(130),
        },
      },
      dropshipper: {
        name: {
          required,
        },
        phone: {
          required,
          minLength: minLength(6),
          maxLength: maxLength(20),
        },
      },
    };
  },
  computed: {
    ...mapState(['item']),
    ...mapState(['user']),
    ...mapState(['dropshipper']),
    errMessageUserEmail() {
      if (this.validate.user.email.required.$invalid) {
        return this.validate.user.email.required.$message;
      } if (this.validate.user.email.email.$invalid) {
        return this.validate.user.email.email.$message;
      }
      return 'correct';
    },
    errMessageUserPhone() {
      // eslint-disable-next-line no-useless-escape
      const regexPhone = this.user.phone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
      if (this.validate.user.phone.required.$invalid) {
        return this.validate.user.phone.required.$message;
      } if (this.validate.user.phone.minLength.$invalid) {
        return this.validate.user.phone.minLength.$message;
      } if (this.validate.user.phone.maxLength.$invalid) {
        return this.validate.user.phone.maxLength.$message;
      } if (regexPhone == null) {
        return 'Enter valid phone number';
      }
      return 'correct';
    },
    errMessageUserAddress() {
      if (this.validate.user.deliveryAddress.required.$invalid) {
        return this.validate.user.deliveryAddress.required.$message;
      } if (this.validate.user.deliveryAddress.maxLength.$invalid) {
        return this.validate.user.deliveryAddress.maxLength.$message;
      }

      return 'correct';
    },
    errMessageDropshipperName() {
      if (this.validate.dropshipper.name.required.$invalid) {
        return this.validate.dropshipper.name.required.$message;
      }
      return 'correct';
    },
    errMessageDropshipperPhone() {
      // eslint-disable-next-line no-useless-escape
      const regexPhone = this.user.phone.match(/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g);
      if (this.validate.dropshipper.phone.required.$invalid) {
        return this.validate.dropshipper.phone.required.$message;
      } if (this.validate.dropshipper.phone.minLength.$invalid) {
        return this.validate.dropshipper.phone.minLength.$message;
      } if (this.validate.dropshipper.phone.maxLength.$invalid) {
        return this.validate.dropshipper.phone.maxLength.$message;
      } if (regexPhone == null) {
        return 'Enter valid phone number';
      }
      return 'correct';
    },
  },
  watch: {
    // eslint-disable-next-line func-names
    'item.isDropshipper': function (val) {
      this.$store.dispatch('actionIsDropshipper', val);
    },
  },
  methods: {
    onChangeForm() {
      const data = {
        user: this.user,
        dropshipper: this.dropshipper,
      };
      this.$store.dispatch('actionChangeForm', data);
    },
    validateForm() {
      this.validate.user.$touch();
      if (this.item.isDropshipper) {
        this.validate.dropshipper.$touch();
        if (!this.validate.dropshipper.$error) {
          return true;
        }
        return false;
      }
      if (!this.validate.user.$error) {
        return true;
      }
      return false;
    },
    submitForm() {
      if (this.validateForm()) {
        this.$router.push('Shipment');
      } else {
        // eslint-disable-next-line no-alert
        window.alert('Form tidak valid');
      }
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
