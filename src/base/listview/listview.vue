<template>
    <div class="contianer">
        <scorll class="listview"
            :data="data" ref="listview"
            :listenScroll="listenScroll"
            @scroll="scroll"
            :probeType="probeType">
            <ul>
                <li v-for="(group,index) in data" class="list-group" :key="index" ref="listGroup">
                    <h2 class="list-group-title">{{group.title}}</h2>
                    <ul>
                        <li v-for="(item,i) in group.items" :key="i" class="list-group-item">
                            <img v-lazy="item.singer_pic" alt="" class="avatar">
                            <span class="name">{{item.singer_name}}</span>
                        </li>
                    </ul>
                </li>
            </ul>

         </scorll>
        <div class="list-shortcut" @touchstart='onShortCutTouchStart' @touchmove.stop.prevent='onShortCutTouchMove'>
            <ul>
                <li :class="{'current':currentIndex===index}" v-for="(item,index) in shortcutList" :key="index" :data-index="index" class="item">{{item}}</li>
            </ul>
        </div>
    </div>

</template>

<script>
import Scorll from '../scroll/scroll'
import {getData} from '@/common/js/dom'
const ANCHOR_HEIGHT = 18
// const TITLE_HEIGHT = 30
export default {
  data () {
    return {
      scrollY: -1,
      currentIndex: 0,
      listHeight: [],
      diff: -1
    }
  },
  props: {
    data: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  components: {Scorll},
  computed: {
    shortcutList () {
      return this.data.map((group) => group.title.substr(0, 1))
    }
  },
  methods: {
    onShortCutTouchStart (e) {
      let anchorIndex = getData(e.target, 'index')
      let firstTouch = e.touches[0]
      this.touch.ystart = firstTouch.pageY
      this.touch.anchorIndex = anchorIndex
      this._scrollTo(anchorIndex)
    },
    onShortCutTouchMove (e) {
    //   let anchorIndex = getData(e.target, 'index')
      let moveTouch = e.touches[0]
      this.touch.yend = moveTouch.pageY
      let delty = (this.touch.yend - this.touch.ystart) / ANCHOR_HEIGHT | 0
      let anchorIndex = parseInt(this.touch.anchorIndex) + delty
      this._scrollTo(anchorIndex)
    },
    scroll (pos) {
    //   console.log(pos)
      this.scrollY = pos.y
    },
    _scrollTo (index) {
      this.$refs.listview.scrollToElement(this.$refs.listGroup[index], 0)
    },
    _calculateHeight () {
      this.listHeight = []
      const list = this.$refs.listGroup
      let height = 0
      this.listHeight.push(height)
      for (var i = 0; i < list.length; i++) {
        let item = list[i]
        height += item.clientHeight
        this.listHeight.push(height)
      }
    }
  },
  created () {
    this.touch = {}
    this.listenScroll = true
    this.probeType = 3
  },
  watch: {
    data () {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    scrollY (newY) {
      const listHeight = this.listHeight
      // 当滚动到顶部，newY>0
      if (newY > 0) {
        this.currentIndex = 0
        return
      }
      // 在中间部分滚动
      for (let i = 0; i < listHeight.length - 1; i++) {
        let height1 = listHeight[i]
        let height2 = listHeight[i + 1]
        if (-newY >= height1 && -newY < height2) {
          this.currentIndex = i
          return
        }
      }
      // 当滚动到底部，且-newY大于最后一个元素的上限
      this.currentIndex = listHeight.length - 2
    }

  }
}

</script>
<style lang="stylus" scoped>
@import "~common/stylus/variable"
.contianer
    height 100%
    width 100%
    .listview
        position: relative
        width: 100%
        height: 100%
        overflow: hidden
        background: $color-background
        .list-group
            padding-bottom: 30px
        .list-group-title
            height: 30px
            line-height: 30px
            padding-left: 20px
            font-size: $font-size-small
            color: $color-text-l
            background: $color-highlight-background
        .list-group-item
            display: flex
            align-items: center
            padding: 20px 0 0 30px
            .avatar
                width: 50px
                height: 50px
                border-radius: 50%
            .name
                margin-left: 20px
                color: $color-text-l
                font-size: $font-size-medium
    .list-shortcut
      position: absolute
      z-index: 30
      right: 0
      top: 50%
      transform: translateY(-50%)
      width: 20px
      padding: 20px 0
      border-radius: 10px
      text-align: center
      background: $color-background-d
      font-family: Helvetica
      .item
        padding: 3px
        line-height: 1
        color: $color-text-l
        font-size: $font-size-small
        &.current
          color: $color-theme
</style>
