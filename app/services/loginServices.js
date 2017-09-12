import { getRequest } from '../utils/request'

export function loginByPhone(params) {
  return getRequest('/login/cellphone' + params)
} 