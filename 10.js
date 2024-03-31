// 編號：CANDY-010
// 程式語言：JavaScript
// 題目：把數字以 10 進位展開式呈現，數字均為大於 0 的正整數
// 範例：9527 變成 "1000 x 9 + 100 x 5 + 10 x 2 + 7"

function expandedForm(num) {
  // 實作寫在這裡
  const str = String(num).split("");
  console.log(str);

  const zero = new Array(str.length - 1).fill(0);
  console.log(zero);

  let decimal = "";
  str.forEach((s, i) => {
    if (s > 0) {
      decimal += `1${zero.slice(i).join("")}x${s}`;
    }
  });
  console.log(decimal);
  console.log(Array.from(decimal));
}

console.log(expandedForm(8)); // 印出 8
console.log(expandedForm(25)); // 印出 10 x 2 + 5
console.log(expandedForm(148)); // 印出 100 x 1 + 10 x 4 + 8
console.log(expandedForm(1450)); // 印出 1000 x 1 + 100 x 4 + 10 x 5
console.log(expandedForm(60308)); // 印出 10000 x 6 + 100 x 3 + 8

//把傳入的數字轉成陣列，split成一個一個，然後和陣列長度相乘

// const result = str.filter((s, i) => {
//   console.log(s, i);
//   if (str.length === 1) {
//     return s;
//   } else if (str.length === 2) {
//     return `10x${str[0]}+${str[1]}`;
//   }
// });
// return result;
// const result = str.map((n) => {
//   console.log(n);
// });
// console.log(result)

//第二種
// const str = String(num).split("");
//   console.log(str);
//   let total = "10";
//   const sum = "1, 10, 100, 1000, 10000";
//   const number = str.forEach((s, i) => {
//     total += s;
//   });

//   console.log(total);
//   const result = `${number}`;
//   console.log(result);

//取餘數的方法
// const digit = num % 10;
// const tens = num % 100;
// const hundreds = num % 1000;
// const thousands = num % 10000;

// const result = ones.filter((r) => {
//   if (parseInt(r) !== 0) {
//     return r;
//   }
// });
// console.log(result);
// let decimal = "";
// const text = result.forEach((t) => {
//   decimal = String(t.split(""));
// });
// console.log(decimal);

// const decimal = str.map((s, i) => {
//   if (s > 0) {
//     return `1${zero.slice(i).join("")}x${s}`;
//   }
// });

// const result = [];
// decimal.forEach((r) => {
//   if (parseInt(r) !== 0) {
//     result.push(`1${r}`);
//   }
// });
// console.log(result);
