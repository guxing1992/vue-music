<template>
    <transition name="slide">
        <music-list :songs='songs' :title="title" :bgImage="bgImage"></music-list>
    </transition>
</template>

<script>
import {mapGetters} from 'vuex'
import {getSingerDetail} from '@/api/singer'
import {ERR_OK} from '@/api/config'
import {createSong} from '@/common/class/SongClass'
import {getSongVkey} from '@/api/song'
import MusicList from '../music-list/MusicList'
export default {
  data () {
    return {
      singerdata: {},
      songs: []
    }
  },

  components: {MusicList},

  computed: {
    bgImage () {
      return this.singer.singer_pic
    },
    title () {
      return this.singer.singer_name
    },
    ...mapGetters([
      'singer'
    ])
  },
  created () {
    this._getSingerDetail()
    // getSongVkey('003jjoM94WLiTf').then((res) => {
    //   console.log(res.req.data.vkey)
    // })
  },
  methods: {
    _getSongVkey (songmid) {
      getSongVkey('003jjoM94WLiTf').then((res) => {
        console.log(res.req)
      })
    },
    _getSingerDetail () {
      if (!this.singer.singer_mid) {
        this.$router.push('/singer')
        return
      }
      getSingerDetail(this.singer.singer_mid).then((res) => {
        if (res.code === ERR_OK) {
          this.singerdata = res.data
          this.songs = this._normalizeSongs(res.data.list)
        }
      }).catch((err) => {
        console.log(err)
      })
    },
    _normalizeSongs (list) {
      let ret = []
      list.forEach(item => {
        let {musicData} = item
        if (musicData.songid && musicData.albummid) {
          ret.push(createSong(musicData))
        }
      })
      return ret
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

</style>
