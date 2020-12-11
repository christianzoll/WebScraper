/*The below code uses the json() method on our response before processing it.*/

(async () => {
   const response = await fetch('https://www.espn.com/nfl/player/stats/_/id/2580/drew-brees');
   const json = await response.json();
   console.log(JSON.stringify(json));
})()
