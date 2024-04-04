// 編號：CANDY-023
// 程式語言：JavaScript
// 題目：算出 N 個數字的最大公因素

function calcGCD(...numbers) {
  // 實作程式碼寫在這裡
  function gcd(a, b) {
    if (b === 0) {
      return a;
    }
    return gcd(b, a % b);
  }
  //初始
  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    result = gcd(result, numbers[i]);
  }
  return result;
}

console.log(calcGCD(10)); // 10
console.log(calcGCD(103, 27)); // 1
console.log(calcGCD(21, 15, 18)); // 3
console.log(calcGCD(104, 96, 36, 88)); // 4
//用輾轉相除法去計算

// const sortNum = numbers.sort((a, b) => a - b).reverse();
//   console.log(sortNum);

//   for (let i = 0; i < sortNum.length; i++) {
//     let result = sortNum[i] % sortNum[i + 1];
//     if (sortNum.length === 1) {
//       return sortNum[i];
//     } else if (sortNum[i] % 2 === 1 && sortNum[i + 1] % 2 === 1) {
//       return 1;
//     }
//     return (
//       sortNum[sortNum.length - 1] % (result += sortNum[i] % sortNum[i + 1])
//     );
//   }

// let answer = a % b;
// a = b % answer;
// console.log(a, b, answer);
// if (a == 0) {
//   return answer;
// }
// return a;
