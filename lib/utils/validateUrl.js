const setRegExpPattern = require('./setRegExpPattern.js');

/**
 * @description Determines whether URL is valid
 * @param {String} url
 * @returns {Boolean}
 */
const validateUrl = (url) => {
  const VALID_URL_PATTERN = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/;
  const patternMatch = setRegExpPattern(VALID_URL_PATTERN);

  return patternMatch.test(url);
}

module.exports = validateUrl;
