<template>
    <div class="singer" ref="singer">
        <list-view :data="singerlist" @selectItem="selectItem"></list-view>
        <router-view></router-view>
    </div>
</template>

<script>
import {getSingerList} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import Singer from '@/common/class/SingerClass'
import ListView from '@/base/listview/listview'
import {mapMutations} from 'vuex'
const HOT_NAME = '热门'
const HOT_SINGER_LENGTH = 10
export default {
  data () {
    return {
      singerlist: []
    }
  },
  components: {ListView},
  created () {
    this._getSingerList(-100)
  },
  methods: {
    selectItem (singer) {
      this.$router.push({
        path: `/singer/${singer.singer_id}`
      })
      this.setSinger(singer)
    },
    ...mapMutations({
      setSinger: 'SET_SINGER'
    }),
    _getSingerList (index) {
      var templist = []
      getSingerList(index).then((res) => {
        if (res.code === ERR_OK) {
          res = res.singerList.data.singerlist
          res.forEach((item, index) => {
            templist.push(
              new Singer({country: item.country, singerId: item.singer_id, singerName: item.singer_name, singerPic: item.singer_pic, singerMid: item.singer_mid}))
          })
          this.singerlist = this._normalizeSinger(templist)
        }
      })
    },
    _normalizeSinger (list) {
      let map = {
        hot: {
          title: HOT_NAME,
          items: []
        }
      }
      list.forEach((item, index) => {
        if (index < HOT_SINGER_LENGTH) {
          map.hot.items.push(item)
        }
        const key = item.findex
        if (!map[key]) {
          map[key] = {
            title: key,
            items: []
          }
        }
        map[key].items.push(item)
      })
      // 得到有序列表
      let hot = []
      let rest = []
      for (let key in map) {
        let val = map[key]
        if (val.title.match(/[a-zA-Z]/)) {
          rest.push(val)
        } else if (val.title === HOT_NAME) {
          hot.push(val)
        }
      }
      rest.sort((a, b) => {
        return a.title.charCodeAt(0) - b.title.charCodeAt(0)
      })
      return hot.concat(rest)
    }
  }
}
</script>
<style lang="stylus" scoped>
.singer
  top: 88px
  position: fixed
  bottom: 0
  width: 100%
</style>
