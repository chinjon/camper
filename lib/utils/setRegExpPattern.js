/**
 * @description Creates a regular expresssion pattern with given pattern
 * @param {RegExp} pattern - pattern to match for RegExp
 * @returns {Object} regular expression object
 */
const setRegExpPattern = (pattern) => new RegExp(pattern, 'g');

module.exports = setRegExpPattern;