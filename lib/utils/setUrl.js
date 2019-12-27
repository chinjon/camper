/**
 * @description Creates url destination with base url and parameter strings
 * @param {String} baseUrl 
 * @param {String} paramStr 
 */
const setUrl = (baseUrl, paramStr = '') => {
  return baseUrl + paramStr;
}

module.exports = setUrl;