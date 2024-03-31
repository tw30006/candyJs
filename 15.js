// 編號：CANDY-015
// 程式語言：JavaScript
// 題目：把原本的字串拆解成 2 個字元一組，若不足 2 個字則補上底線
// 範例：
//      "abcdef" -> ['ab', 'cd', 'ef']
//      "abcdefg" -> ['ab', 'cd', 'ef', 'g_']

function splitString(str) {
  // 實作寫在這裡
  const strArr = str.split("");
  const evenArr = strArr.filter((e, i) => {
    if (i % 2 === 1) {
      return e;
    }
  });
  const oddArr = strArr.filter((o, i) => {
    if (i % 2 === 0) {
      return o;
    }
  });
  const addition = oddArr.map((a, i) => {
    if (evenArr.length / 2 !== 0) {
      evenArr.push("_");
    }
    return a + evenArr[i];
  });
  return addition;
}

console.log(splitString("abcdef")); // ["ab", "cd", "ef"]
console.log(splitString("abcdefg")); // ["ab", "cd", "ef", "g_"]
console.log(splitString("")); // []
//如果陣列長度是奇數的話，就要加＿
//如果陣列是空的話，就回傳空陣列

//把陣列拆成兩條陣列再做相加
