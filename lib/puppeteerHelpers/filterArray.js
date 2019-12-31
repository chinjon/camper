/**
 * @description Filters and returns items within an array 
 * that contains a specific string
 * @param {Array} array - array to search through 
 * @param {String} str - string to find within items in array
 */
const filterArray = (array, str) => array.filter((item) => item.includes(str));

module.exports = filterArray;