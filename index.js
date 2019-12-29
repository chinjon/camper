const puppeteer = require('puppeteer');

const setUrl = require('./lib/utils/setUrl');
const getUserParams = require('./lib/utils/getUserParams');
const parseParams = require('./lib/utils/parseParams.js');
const cli = require('./cli.js');
const puppeteerHelpers = require('./lib/puppeteerHelpers/puppeteerHelpers.js');

const bandcampUrls = require('./data/bandcampUrls');
const PARAMS = getUserParams(process.argv.slice(2));
const userParams = parseParams(PARAMS)
const GO_TO_URL = setUrl(bandcampUrls.baseUrl + `/tag/${userParams[0].tag}`);

// https://bandcamp.com/tag/japan?sort_field=pop
// https://bandcamp.com/tag/japan?sort_field=date

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  console.log(getUserParams(process.argv));
  console.log(console.log(userParams))
  
  await page.goto(GO_TO_URL);
  await page.waitFor('body');
  const hrefs = await puppeteerHelpers.getAllHrefs(page)
  const bandcampHrefs = puppeteerHelpers.filterArray(hrefs, '.bandcamp.com');

  console.log(bandcampHrefs)
  
  await cli();
  await browser.close();
})();