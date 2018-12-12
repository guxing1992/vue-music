// import {getSongVkey} from '../../api/song'
export default class Song {
  constructor ({id, mid, singer, name, album, duration, image, url}) {
    this.id = id
    this.mid = mid
    this.singer = singer
    this.name = name
    this.album = album
    this.duration = duration
    this.image = image
    this.url = url
  }
}
export function createSong (musicData) {
  return new Song({
    id: musicData.songid,
    mid: musicData.songmid,
    singer: filterSinger(musicData.singer),
    name: musicData.songname,
    album: musicData.albumname,
    duration: musicData.interval,
    image: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${musicData.albummid}.jpg?max_age=2592000`,
    url: `http://183.222.96.15/amobile.music.tc.qq.com/C400${musicData.strMediaMid}.m4a?guid=724337235&vkey=B4DAD8A20639EE387EBCDAEB8120864788DD51E05301553E43B5799DA49D4E8F85B659718A57BF62AFB96C25D077CD1D1F78AB90CC9B6146&uin=0&fromtag=66`
  })
}
function filterSinger (listSinger) {
  let ret = []
  if (!listSinger) {
    return ''
  }
  listSinger.forEach(element => {
    ret.push(element.name)
  })
  return ret.join('&')
}
