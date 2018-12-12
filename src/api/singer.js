import axios from 'axios'
import {commonParams, options} from './config'
import jsonp from '@/common/js/jsonp'

export function getSingerList (index = -100) {
  const url = 'server/getSingerList'
  return axios.get(url, {
    params: {
      index: index
    }
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
export function getSingerDetail (singerId) {
  const url = 'api/v8/fcg-bin/fcg_v8_singer_track_cp.fcg'
  const data = Object.assign({}, commonParams, {
    hostUin: 0,
    needNewCode: 0,
    platform: 'yqq',
    order: 'listen',
    begin: 0,
    num: 100,
    songstatus: 1,
    g_tk: 662599736,
    singermid: singerId
  })
  return jsonp(url, data, options)
  // return axios.get(url, {
  //   params: {
  //     singermid: singerId
  //   }
  // }).then((res) => {
  //   return Promise.resolve(res.data)
  // }).catch((err) => {
  //   return Promise.reject(err)
  // })
}

// export function getSongVkey(songmid){

// }
