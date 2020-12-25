/*jshint esversion: 6 */
export function setLoginResponse(data) {
   return {
      type: 'setLoginResponse',
      payload: data
   };
}