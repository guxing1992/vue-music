<template>
  <header>
    <div class="icon">11</div>
    <h1 class="text">Vue-Music</h1>
  </header>
</template>

<script>
export default {
  data () {
    return {
    }
  },

  components: {},

  computed: {},

  methods: {}
}

</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
@import "~common/stylus/mixin"
header
  display flex
  flex-direction row
  justify-content center
  color $color-theme
  font-size 0
  height 44px
  .icon
    display inline-block
    vertical-align top
    margin-top 6px
    width 30px
    height 32px
    margin-right 9px
    bg-image('logo')
    background-size: 30px 32px
  .text
    display inline-block
    vertical-align top
    line-height 44px
    font-size $font-size-large
</style>
