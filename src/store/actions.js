import * as types from './mutations-types'
export const selectPlay = ({commit, state}, {list, index, currentPlayUrl}) => {
  commit(types.SET_SEQUENCELIST, list)
  commit(types.SET_PLAYLIST, list)
  commit(types.SET_CURRENTINDEX, index)
  commit(types.SET_FULL_SCREEN, true)
  commit(types.SET_PLAYING_STATE, true)
  commit(types.SET_CURRENTPLAY_URL, currentPlayUrl)
}
