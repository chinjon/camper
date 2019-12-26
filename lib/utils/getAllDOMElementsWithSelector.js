/**
 * @description Returns a node list of all DOM elements with given selector
 * @param {String} selector - identifier for DOM elements to match
 * @returns {Object} Node list of elements that match
 */
const getAllDomElementsWithSelector = (selector) => document.querySelectorAll(selector);

module.exports = getAllDomElementsWithSelector;