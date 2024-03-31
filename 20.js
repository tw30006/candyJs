// 編號：CANDY-020
// 程式語言：JavaScript
// 題目：檢查字串的 x 跟 o 的數量是不是一樣多，不分大小寫

function xxoo(str) {
  // 實作寫在這裡
  const oArr = str.match(/[o|O]/g);
  const xArr = [...str.matchAll(/[x|X]/g)];
  return oArr.length === xArr.length;
}

console.log(xxoo("ooxx")); // true
console.log(xxoo("xxoo")); // true
console.log(xxoo("xxooo")); // false
console.log(xxoo("xoox")); // true
console.log(xxoo("ooAA")); // false
console.log(xxoo("xoXoA")); // true
// const xArr = str.split("").filter((s) => s === "x" || s === "X");
//   const oArr = str.split("").filter((o) => o === "o" || o === "O");
//   if (xArr.length === oArr.length) {
//     return true;
//   }
//   return false;
