/*  Alternative to regex attempt at retrieving data that requires the  node module 'jsdom'  */

const jsdom = require("jsdom");
const {  JSDOM  } = jsdom;


/* Below 'queries' imported HTML as its own DOM object using querySelector and related methods */

(async () => {
   const response = await fetch('https://www.espn.com/nfl/player/stats/_/id/2580/drew-brees');
   const text = await response.text();
   const dom = await new JSDOM(text);
   console.log(dom.window.document.querySelector("h1").textContent);
})()
