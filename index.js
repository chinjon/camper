const puppeteer = require('puppeteer');

const setUrl = require('./lib/utils/setUrl');
const getUserParams = require('./lib/utils/getUserParams');

const bandcampUrls = require('./data/bandcampUrls');
const PARAMS = getUserParams(process.argv.slice(2));

const GO_TO_URL = setUrl(bandcampUrls.baseUrl + `/tag/${PARAMS.tag}`);

// https://bandcamp.com/tag/japan?sort_field=pop
// https://bandcamp.com/tag/japan?sort_field=date

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  console.log(getUserParams(process.argv));
  await page.goto(GO_TO_URL);
  await page.waitFor('body');
  const hrefs = await page.$$eval('a', anchors => [].map.call(anchors, a => a.href).filter((item) => item.includes(".bandcamp.com") ));
  console.log(hrefs)
  await browser.close();
})();