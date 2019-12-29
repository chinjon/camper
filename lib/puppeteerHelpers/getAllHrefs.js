/**
 * @description Returns all '<a href="">' tag elements on page
 * @param {Object} page - page object created by Puppeteer instance
 * @returns {Array} an array of HTML tags with '<a href="">'
 */
const getAllHrefs = async (page) => await page.$$eval('a', anchors => [].map.call(anchors, a => a.href));

module.exports = getAllHrefs;