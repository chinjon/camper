const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https://bandcamp.com/tag/experimental');
  await page.waitFor('body');
  const hrefs = await page.$$eval('a', anchors => [].map.call(anchors, a => a.href).filter((item) => item.includes('.bandcamp.com') ));
  console.log(hrefs)
  await browser.close();
})();