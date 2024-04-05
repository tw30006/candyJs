// 編號：CANDY-018
// 程式語言：JavaScript
// 題目：實作一個可以印出隨機整數的函數
function randomNumber(x, y = 0) {
  if (x < y) {
    return Math.floor(Math.random() * (y - x) + x);
  } else if (y === 0) {
    return Math.floor(Math.random() * (x - y));
  }
}

console.log(randomNumber(50)); // 隨機印出 0 ~ 49 之間的任何一個數字
console.log(randomNumber(5, 30)); // 隨機印出 5 ~ 29 之間的任何一個數字
// if (x < y) {
//   return Math.floor(Math.random() * y) + x;
// } else if (x > y) {
//   return Math.floor(Math.random() * x) + y;
// }
