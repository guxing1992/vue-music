import * as types from './mutations-types'
const mutations = {
  [types.SET_SINGER] (state, singer) {
    state.singer = singer
  },
  [types.SET_PLAYING_STATE] (state, flag) {
    state.playing = flag
  },
  [types.SET_FULL_SCREEN] (state, flag) {
    state.fullscreen = flag
  },
  [types.SET_PLAYLIST] (state, list) {
    state.playList = list
  },
  [types.SET_SEQUENCELIST] (state, list) {
    state.sequenceList = list
  },
  [types.SET_MODE] (state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENTINDEX] (state, currentIndex) {
    state.currentIndex = currentIndex
  }

}
export default mutations
