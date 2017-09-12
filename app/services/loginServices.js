import { getRequest } from '../utils/request'

export async function loginByPhone(params) {
  return getRequest('/login/cellphone' + params)
} 