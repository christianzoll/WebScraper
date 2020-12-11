/* Below the node module puppeteer enables dynamic websites with data that's generated in real-time precluding the use of fetch which only works on static sites.  */

/*  Chrome over DevTools Protocol provide features including automatic page navigation and screen capture   */

const puppeteer = require('puppeteer');

const browser = await puppeteer.launch({
   headless: false,
});


const page = await browser.newPage();
await page.setRequestInterception(true);

await page.goto('https://www.espn.com/nfl/player/stats/_/id/2580/drew-brees');

