import pinyin from 'js-pinyin'
pinyin.setOptions({checkPolyphone: false, charCase: 0})
export default class Singer {
  constructor ({country, singerId, singerName, singerPic, singerMid}) {
    this.country = country
    this.singer_id = singerId
    this.singer_name = singerName
    this.singer_pic = singerPic
    this.findex = pinyin.getCamelChars(singerName)[0]
    this.singer_mid = singerMid
  }
}
