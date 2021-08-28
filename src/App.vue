<template>
  <div class="container">
    <Stepper :current-path="currentTabComponent" :step="step"/>
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      step: [{
        name: 'Delivery',
        path: '/',
      }, {
        name: 'Shipment',
        path: '/shipment',
      }, {
        name: 'Thanks',
        path: '/thanks',
      }],
    };
  },
  computed: {
    currentTabComponent() {
      return this.$route.path;
    },
  },
};
</script>

<style lang="stylus">
body
  background-color #FFFAE6
  font-family: 'Inter', sans-serif;
.desc
  font-size 14px
#nav
  text-align center
h1
  font-style normal
  font-weight bold
  font-size 36px
  line-height 44px
  color #FF8A00
  position relative
  &::after
    content: ' ';
    transform: rotate(0deg);
    position: absolute;
    bottom: 4px;
    width: 100%;
    height: 10px;
    background: #ccc;
    opacity: 0.3;
    left: 0;

h3
  font-style normal
  font-weight bold
  font-size 24px
  line-height 29px
  color #FF8A00

#app
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  margin-top 60px
.container
  position relative
  max-width 1100px
  background-color white
  margin 0 auto
  padding 25px
  box-shadow 2px 10px 20px rgba(255, 138, 0, 0.1)
  border-radius 4px
</style>
