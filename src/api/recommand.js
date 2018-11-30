// import jsonp from 'common/js/jsonp'
import {commonParams} from './config'
import axios from 'axios'
export function getRecommand () {
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const url = 'api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParams, {
    uin: 1392497812,
    platform: 'h5',
    needNewCode: 1
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    var data = res.data
    if (data.code === 0) {
      return Promise.resolve(data.data)
    } else {
      return Promise.reject(data.data)
    }
  }).catch((err) => {
    return Promise.reject(err)
  })
  // return new Promise((resolve, reject) => {
  //   axios.get(url, {
  //     params: data
  //   }).then((res) => {
  //     // console.log(res.data)
  //     var data = res.data
  //     if (data.code === 0) {
  //       resolve(data.data)
  //     } else {
  //       reject(data.data)
  //     }
  //   }).catch((err) => {
  //     reject(err)
  //   })
  // })
}

export function getDiscList () {
  const url = 'server/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })
  return axios.get(url, {
    headers: {
      // referer: 'https://y.qq.com/portal/playlist.html',
      // host: 'c.y.qq.com'
    },
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  }).catch((err) => {
    return Promise.reject(err)
  })
}
