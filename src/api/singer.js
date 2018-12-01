import axios from 'axios'
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
