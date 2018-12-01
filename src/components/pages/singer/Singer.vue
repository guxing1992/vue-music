<template>
    <div>
        Singer
    </div>
</template>

<script>
import {getSingerList} from '@/api/singer'
import {ERR_OK} from '@/api/config'
export default {
  data () {
    return {
      singerlist: []
    }
  },
  created () {
    this._getSingerList(2)
  },
  methods: {
    _getSingerList (index) {
      getSingerList(index).then((res) => {
        if (res.code === ERR_OK) {
          console.log(res)
          res = res.singerList.data.singerlist
          this.singerlist = res
        }
      })
    }
  }
}
</script>
