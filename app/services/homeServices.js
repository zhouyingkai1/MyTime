import { getRequest } from '../utils/request'
//获取推荐歌单
export function getPersonalized(params) {
  return getRequest('/personalized' + params)
} 
//获取推荐新歌
export function getNewSong(params) {
  return getRequest('/personalized/newsong' + params)
} 
//获取banner
export function getBanner(params) {
  return getRequest('/banner' + params)
} 
//推荐MV
export function getMv(params) {
  return getRequest('/personalized/mv' + params)
} 
//主播电台
export function getDjProgram(params) {
  return getRequest('/personalized/djprogram' + params)
} 
//独家放送
export function getPrivatecontent(params) {
  return getRequest('/personalized/privatecontent' + params)
} 