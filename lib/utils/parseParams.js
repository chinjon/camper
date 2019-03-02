const userParamFlags = require('../../data/userParamFlags');
const setRegExPattern = require('./setRegExPattern');

const parseParams = (params) => {
  const MATCH_FLAG_PATTERN = '--(.*?)=';
  const REGEX_PATTERN = setRegExPattern(MATCH_FLAG_PATTERN);
  const parsedParams = [];

  params.forEach((param) => {
    const argFlag = param.match(REGEX_PATTERN);
    if(userParamFlags[argFlag]){
      parsedParams.push(param)
    } else {
      throw new Error(`Unrecognized argument: ${argFlag} is invalid`)
    }
  });

  return parsedParams;
}

module.exports = parseParams;