/* Async/Await Syntax */

(async () => {
   try {
      const result = await doSomething();
      const newResult = await doSomethingElse(result);
      const finalResult = await doThirdThing(newResult);
      console.log(finalResult);
}  catch(err)  {
   console.log(err);
}
})();

