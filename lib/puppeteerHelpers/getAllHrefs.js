const getAllHrefs = async (page) => await page.$$eval('a', anchors => [].map.call(anchors, a => a.href));

module.exports = getAllHrefs;