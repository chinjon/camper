const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://bandcamp.com');
  const hrefs = await page.$$eval('a', anchors => [].map.call(anchors, a => a.href))
  console.log(hrefs)
  await browser.close();
})();