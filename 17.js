// 編號：CANDY-017
// 程式語言：JavaScript
// 題目：計算數字的 2 進位裡有幾個 1
// 範例：5 -> 101 -> 2 個 1

function countBits(num) {
  // 實作寫在這裡
  const binary = num.toString(2).split("");

  let oneSum = 0;
  for (let n = 0; n < binary.length; n++) {
    oneSum += parseInt(binary[n]);
  }
  return oneSum;
}

console.log(countBits(1234)); // 5
console.log(countBits(1450)); // 6
console.log(countBits(9527)); // 8
