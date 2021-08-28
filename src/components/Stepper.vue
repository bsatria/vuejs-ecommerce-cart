<template>
    <div class="stepper">
        <div
            :class="['stepper__wrapper',
                    { isMobile: currentPath !== val.path }]"
            v-for="(val, key) in step" :key="key+1">
                <div :class="['stepper__number',
                    { isActive: currentPath === val.path }]">{{key+1}}</div>
                <router-link :to="val.path">{{ val.name }}</router-link>
        </div>
    </div>
</template>

<script>
export default {
  props: {
    step: { type: Array, required: true },
    currentPath: { type: String, required: true },
  },
};
</script>

<style lang="stylus" scoped>
.stepper
    padding 20px
    height 70px
    box-sizing border-box
    left 350px
    top -40px
    position absolute
    background #FFFAE6
    border-radius 35px
    display flex
    align-items center
    @media screen and (max-width: 1024px)
     left 0px
     margin-left: 10vh;
     margin-right: 10vh;
     top -55px
     left: 0;
     right: 0;
     text-align: center;
     justify-content center
.stepper__wrapper
    display flex
    align-items center
    margin 0 20px
    a
     text-decoration none
     font-size 16px
     color #FF8A00
    &::after
     content ' '
     margin-left 10px
     border: solid #FF8A00;
     border-width: 0 3px 3px 0;
     display: inline-block;
     transform: rotate(-45deg)
     padding: 3px;
    &:last-child::after
     display none
    @media screen and (max-width: 420px)
     &.isMobile
       display none
.stepper__number
    width 25px
    height  25px
    border-radius 50%
    display flex
    align-items center
    justify-content center
    background-color #FFE4B8
    color #FF8A00
    margin-right  10px
    &.isActive
        background-color #FF8A00
        color white
</style>
