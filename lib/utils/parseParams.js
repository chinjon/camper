const userParamFlags = require('../../data/userParamFlags.js');
const setRegExpPattern = require('./setRegExpPattern.js');

/**
 * @description Parses through an object that contains user parameters.
 * The function determines whether users have provided valid arguments.
 * @param {Object} params 
 */
const parseParams = (params) => {
  const MATCH_FLAG_PATTERN = '--(.*?)=';
  const REGEX_PATTERN = setRegExpPattern(MATCH_FLAG_PATTERN);
  const parsedParams = [];

  params.forEach((param) => {
    const argFlag = param.match(REGEX_PATTERN);
    if(userParamFlags[argFlag]){
      const USER_ARG_MAP_ITEM = {};

      USER_ARG_MAP_ITEM[userParamFlags[argFlag]] = param.slice(param.indexOf('=')+1);
      parsedParams.push(USER_ARG_MAP_ITEM)
    } else {
      throw new Error(`Unrecognized argument: ${argFlag} is invalid`)
    }
  });

  return parsedParams;
}

module.exports = parseParams;