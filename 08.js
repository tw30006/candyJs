// 編號：CANDY-008
// 程式語言：JavaScript
// 題目：傳入一字串，計算得分最高的字
//      英文字母 a 得 1 分、b 得 2 分、c 得 3 分，以此類推。
//      所有傳入的字都是小寫。

function highestScoreWord(input) {
  // 實作寫在這裡
  const newInput = input.split(" ");
  const letter = "abcdefghijklmnopqrstuvwxyz";
  const wordArr = newInput.map((word) => word.split(""));
  const letterArr = Array.from(letter).entries();

  console.log(letterArr);
  // const sum = Array.from(letter).reduce((acc, curr, index) => {
  //   acc[curr] = index + 1;
  //   return acc;
  // }, {});
  // console.log(sum);

  // const sumCalculate = newInput.map((word) => {

  //   // for (let s = 0; s < letter.length; s++) {
  //   //   scores[letter[s]] = s + 1;
  //   // }
  //   return word.split("").reduce((acc, curr) => acc + scores[curr], 0);
  // });
  // const maxSum = Math.max(...sumCalculate);
  // const findMaxSumIndex = sumCalculate.indexOf(maxSum);
  // return newInput[findMaxSumIndex];
}
console.log(highestScoreWord("lorem ipsum dolor sit amet")); // 印出 ipsum
console.log(highestScoreWord("heyn i need a rubygem up to build this")); // 印出 rubygem
console.log(highestScoreWord("in time machine there are some bugs")); // 印出 there

// const newArr = input.split(" ");
//   console.log(newArr);
//   const findLongStr = newArr.filter((f) => f.length >= 5);
//   console.log(findLongStr)

// const newArr = [];

// const newArr = [];
//   for (let i = 0; i < newInput.length; i++) {
//     newArr.push(score[newInput[i].toLowerCase()]);
//   }
//   console.log(newArr);
// const result = newInput.reduce((x, y) => x + score[y], 0);
//   console.log(result);
// }
