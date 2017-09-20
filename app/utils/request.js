import 'whatwg-fetch'

import pathInterceptor from './pathInterceptor';
function parseJSON(response) {
  return  JSON.parse(response.text()) 
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

function handleError(error) {
  console.log(error,'ddd')
  if (error.response && error.response.status) {
    return{
      code: error.response && error.response.status,
      msg: error.response && error.response.body || '网络发生异常'
    };
  } else {
    return{code: 504, data: {code: 'timeout', msg: '请求超时'}};
  }
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  url  = /http:\\/.test(url) ? url : pathInterceptor.request(url)
  return fetch(url, { 
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(options)
  }).then(checkStatus)
    .then((data) => {
      return data.text()
    }).then(result=>{  
      return JSON.parse(result) 
    })
    .catch((err) => handleError(err));
}
export function getRequest(url) {
  url  = /http:\\/.test(url) ? url : pathInterceptor.request(url)
  return fetch(url,{
    method: 'GET'
  })
    .then(checkStatus)
    .then(data=> data.text())
    .then((data) => JSON.parse(data))
    .catch((err) => handleError(err));
  }