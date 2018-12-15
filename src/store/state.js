import {playMode} from '@/common/js/config'
const state = {
  singer: {
  },
  playing: false,
  fullscreen: false,
  playList: [],
  sequenceList: [],
  mode: playMode.sequence, // 播放模式
  currentIndex: -1 // 当前播放哪首歌
}
export default state
