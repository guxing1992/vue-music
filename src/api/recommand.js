import {commonParmas} from './config'
import axios from 'axios'
export function getRecommand () {
//   const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const url = 'api/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg'
  const data = Object.assign({}, commonParmas, {
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
