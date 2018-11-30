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
      <div class="recommend-list">
        <div class="list-title">热门歌单</div>
        <ul>
          <li v-for="(item,index) in songList" :key="index">
            <!-- <div class="song-item" v-for="(item,index) in page" :key="index">
              <div class="itemimg">
                <img :src="item.picUrl" alt="">
              </div>
              <div class="desc">{{item.songListDesc}}</div>
              <div class="songauthor">{{item.songListAuthor}}</div>
            </div> -->
            <div class="itemimg">
                <img :src="item.picUrl" alt="">
                <span class="listen_count"><div class="icon_listen"></div>{{item.accessnum|formateNumber}}</span>
                <span class="icon_play"></span>
            </div>
            <div class="desc">{{item.songListDesc}}</div>
            <div class="songauthor">{{item.songListAuthor}}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Scorll from '@/base/scroll/scroll'
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
  filters: {
    formateNumber: function (value) {
      value = value / 10000
      return value.toFixed(1) + '万'
    }
  },
  computed: {
    getComputedSongList () {
      var newSongList = []
      this.songList.forEach((item, index) => {
        const page = Math.floor(index / 2)
        if (!newSongList[page]) {
          newSongList[page] = []
        }
        newSongList[page].push(item)
      })
      return newSongList
    }
  },
  components: { Slider, Scorll },
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
@import "~common/stylus/mixin"

  .recommend
    width: 100%
    .recommend-content
      // height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
      .recommend-list
        .list-title
          height: 45px
          line-height: 45px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        ul
          width 100%
          display: flex;
          flex-wrap: wrap;
          align-content: center;
          li
            padding 10px
            flex: 0 0 50%;
            width 50%
            box-sizing: border-box;
            display flex
            flex-direction column
            color $color-text-l
            .itemimg
              flex 1
              position: relative;
              margin-bottom: 5px;
              img
                width: 100%;
                z-index 1
              .listen_count
                position:absolute
                bottom 10px
                left 3px
                z-index 15
                color $color-text
                i.icon_listen
                  background-image: url(../../../assets/images/list_sprite.png);
                  background-repeat: no-repeat;
                  background-size: 24px 60px;
                  width: 10px;
                  height: 10px;
                  background-position: 0 -50px;
              .icon_play
                position:absolute
                background-image: url(../../../assets/images/list_sprite.png);
                background-repeat: no-repeat;
                background-size: 24px 60px;
                height 24px
                width 24px
                bottom 10px
                right 5px
                z-index 10
            .desc
              no-wrap()
              height 30px
              line-height 30px
              font-size $font-size-medium
            .songauthor
              height 20px
              line-height 20px
              no-wrap()
              font-size $font-size-small
</style>
