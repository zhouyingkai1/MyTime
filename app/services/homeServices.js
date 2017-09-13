import { getRequest } from '../utils/request'

export function getPersonalized(params) {
  return getRequest('/personalized' + params)
} 