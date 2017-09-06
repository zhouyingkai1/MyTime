import request from '../utils/request';

export async function artcleList(params) {
  return request('/main/getArtcleList.php', params)
} 
export async function login(params) {
  return request('/login.php', params)
} 
