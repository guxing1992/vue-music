<template>
    <transition name="slide">
        <div class="singer-detail">singer-detail</div>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from '@/api/singer'
import {ERR_OK} from '@/api/config'
export default {
  data () {
    return {
      singerdata: {}
    }
  },

  components: {},

  computed: {
    ...mapGetters([
      'singer'
    ])
  },
  created () {
    this._getSingerDetail()
  },
  methods: {
    _getSingerDetail () {
      if (!this.singer.singer_mid) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.singer_mid).then((res) => {
        if (res.code === ERR_OK) {
          this.singerdata = res.data
        }
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}

</script>
<style lang="stylus" scoped>
@import '~common/stylus/variable';
.slide-enter-active, .slide-leave-active {
  transition: all .3s;
}
.slide-enter, .slide-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform :translate3d(100%,0,0)
}

.singer-detail
    position fixed
    z-index 100
    top 0
    bottom 0
    right 0
    left 0
    background $color-background
</style>
