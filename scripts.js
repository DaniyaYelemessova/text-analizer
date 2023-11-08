// window.addEventListener("load", function(){

//   let sentence = "hello hello my name is Daniya and name Hello";

//   function numberOfOccurrencesInText(word, text) {
//     const textArray = text.split(" ");
//     let wordCount = 0;
//     textArray.forEach(function(element){
//       if(element.toLowerCase().includes(word.toLowerCase())){
//         wordCount++
//       }
//     })
//     return wordCount;
//   }

//   console.log(numberOfOccurrencesInText("hello!", sentence))
// })

function offensiveWordCleaner(text) {
  const textArray = text.split(" ");
  const offensiveWords = ["zoinks", "muppeteer", "biffaroni", "loopdaloop"];
  let resultArray = [];
  resultArray = textArray.filter(function (element) {
    return !offensiveWords.includes(element.toLowerCase());
  });

  return resultArray.join(" ");
}
console.log(
  offensiveWordCleaner("You, muppeteer zoinks BIFFARONI fklgjhkl! Loopdaloop!")
);
