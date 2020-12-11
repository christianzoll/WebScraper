/* Below retrieves the first h1 tag's content's by placing the regex as a match method's parameter/argument */


(async () => {
   const response = await fetch('https://www.espn.com/nfl/player/stats/_/id/2580/drew-brees');
   const text = await response.text();
   console.log(text.match(/(?<=\<h1>).*(?=\<\/h1)/));
})()
