/**
 *  fetch api calls
 */
import 'whatwg-fetch';

/**
 * fetch API GET method
 * @param  {string} URL [api requested url]
 * @return {object}     [results]
 */
export function APIgetCall(URL) {
   return new Request(URL, {
      method: 'get',
      mode: 'cors',
      credentials: 'include',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      }
   })
}


/**
 * new request for fetch API POST method
 * @param {string} URL    [fetch address]
 * @param {object} PARAMS [post params]
 */
export function APIpostCall(URL, PARAMS) {
   return new Request(URL, {
      method: 'post',
      mode: 'cors',
      credentials: 'include',
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
      },
      body: JSON.stringify(PARAMS)
   })
}


