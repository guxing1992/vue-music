// import axios from 'axios'
// import {commonParams, options} from './config'
import jsonp from '@/common/js/jsonp'
export function getSongVkey (songmid) {
  let url = `https://u.y.qq.com/cgi-bin/musicu.fcg?callback=getplaysongvkey&g_tk=5381&jsonpCallback=getplaysongvkey8754481878813143&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data={"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"724337235","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"724337235","songmid":["${songmid}"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":20,"cv":0}}`
  // const data = Object.assign({}, commonParams, {
  //   callback: 'getplaysongvkey8754481878813143',
  //   g_tk: 5381,
  //   jsonpCallback: 'getplaysongvkey8754481878813143',
  //   loginUin: 0,
  //   hostUin: 0,
  //   format: 'jsonp',
  //   inCharset: 'utf8',
  //   outCharset: 'utf-8',
  //   notice: 0,
  //   platform: 'yqq',
  //   needNewCode: 0,
  //   data: `{'req': {'module': 'CDN.SrfCdnDispatchServer', 'method': 'GetCdnDispatch', 'param': {'guid': '724337235', 'calltype': 0, 'userip': ''}}, 'req_0': {'module': 'vkey.GetVkeyServer', 'method': 'CgiGetVkey', 'param': {'guid': '724337235', 'songmid': ["${songmid}"], 'songtype': [0], 'uin': '0', 'loginflag': 1, 'platform': '20'}}, 'comm': {'uin': 0, 'format': 'json', 'ct': 20, 'cv': 0}}`
  // })
  return jsonp(url)
}
