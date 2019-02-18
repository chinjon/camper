const puppeteer = require('puppeteer');

const setUrl = require('./lib/utils/setUrl');
const getUserParams = require('./lib/utils/getUserParams');

const bandcampUrls = require('./data/bandcampUrls');

const goToUrl = setUrl(bandcampUrls.baseUrl + '/tag/experimental');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log(getUserParams(process.argv));
  await page.goto(goToUrl);
  await page.waitFor('body');
  const hrefs = await page.$$eval('a', anchors => [].map.call(anchors, a => a.href).filter((item) => item.includes(".bandcamp.com") ));
  console.log(hrefs)
  await browser.close();
})();