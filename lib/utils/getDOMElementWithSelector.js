/**
 * @description returns the top-most DOM element that contains given selector
 * @param {String} selector - Selector to match on DOM
 * @retuns {Object} DOM object
 */
const getDomElementWithSelector = (selector) => document.querySelector(selector);

module.exports = getDomElementWithSelector;