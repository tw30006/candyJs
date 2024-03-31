// 編號：CANDY-013
// 程式語言：JavaScript
// 題目：根據台灣財政部所提供的公司統編驗證規則，計算統一編號是否正確
// https://www.fia.gov.tw/singlehtml/3?cntId=c4d9cff38c8642ef8872774ee9987283
// 檢查邏輯由可被『10』整除改為可被『5』整除
function isValidVatNumber(vat) {
  // 實作寫在這裡
  //   const multiplier = ["1", "2", "1", "2", "1", "2", "4", "1"];
  console.log(vat.length - 1 === "7");
  const multiplier = [1, 2, 1, 2, 1, 2, 4, 1];
  const productSum = vat.split("").map((v, i) => parseInt(v) * multiplier[i]);
  console.log(productSum);
  const total = productSum.map((s) => {
    if (s >= 10) {
      const ten = Math.floor(s / 10);
      const one = s % 10;
      return ten + one;
    }
    return s;
  });
  console.log(total);
  const result = total.reduce((acc, cv) => {
    acc + cv;
  }, 0);
  console.log(result);
}

console.log(isValidVatNumber("10458575")); // true
console.log(isValidVatNumber("88117125")); // true
console.log(isValidVatNumber("53212539")); // true
console.log(isValidVatNumber("88117126")); // false
