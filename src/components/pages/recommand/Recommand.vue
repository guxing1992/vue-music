<template>
  <div class="recommend">
    <div class="recommend-content">
      <div v-if="sliders.length" class="slider-wrapper">
        <slider>
          <div v-for="(item,index) in sliders" :key="index">
            <a :href="item.linkUrl">
              <img class="needsclick" :src="item.picUrl">
            </a>
          </div>
        </slider>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommand } from '@/api/recommand'
import Slider from '@/base/slider/slider'
export default {
  name: 'Recommand',
  data () {
    return {
      sliders: [],
      radioList: [],
      songList: []
    }
  },
  components: { Slider },
  created () {
    // var url = '/api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
    // this.$ajax.get(url).then((res) => {
    //   console.log(res.data)
    // }).catch((err) => {
    //   console.log(err)
    // })
    this._getRecommand()
  },
  methods: {
    _getRecommand () {
      getRecommand().then(res => {
        this.sliders = res.slider
        this.radioList = res.radioList
        this.songList = res.songList
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"

  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .item
          display: flex
          box-sizing: border-box
          align-items: center
          padding: 0 20px 20px 20px
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            overflow: hidden
            font-size: $font-size-medium
            .name
              margin-bottom: 10px
              color: $color-text
            .desc
              color: $color-text-d
      .loading-container
        position: absolute
        width: 100%
        top: 50%
        transform: translateY(-50%)
</style>
