// 編號：CANDY-025
// 程式語言：JavaScript
// 題目：
//   一般我們常見的四捨五入計算方式在統計上容易造成計算偏差
//   於是有人推出了「銀行家捨入法」用來稍微平衡計算偏差
//   計算方式是「四捨六入五成雙」
//   當捨入計算位數剛好是 5 的時候，會算出離這個數字比較近的偶數

function bankersRounding(num, digits = 0) {
  // 實作程式碼寫在這裡
  let zeroPoint = "";
  let onePoint = "";
  if (digits == 0) {
    zeroPoint = num.toString().split(".");
  } else if ((digits = 1)) {
    onePoint = num.toString().split("");
  }

  for (let z = 0; z < zeroPoint.length; z++) {
    if (zeroPoint[zeroPoint.length - 1] <= 4) {
      return Math.floor(num);
    } else if (zeroPoint[zeroPoint.length - 1] >= 6) {
      return Math.ceil(num);
    } else if (zeroPoint[zeroPoint.length - 1] == 5) {
      if (zeroPoint[zeroPoint.length - 2] % 2 == 0) {
        return Math.floor(num);
      }
      return Math.ceil(num);
    }
  }
  for (let i = 0; i < onePoint.length; i++) {
    if (onePoint[onePoint.length - 1] <= 4) {
      return Math.floor(num * 10) / 10;
    } else if (onePoint[onePoint.length - 1] >= 6) {
      return Math.ceil(num * 10) / 10;
    } else if (onePoint[onePoint.length - 1] == 5) {
      if (onePoint[onePoint.length - 2] % 2 == 0) {
        return Math.floor(num * 10) / 10;
      }
      return Math.ceil(num * 10) / 10;
    }
  }
}

console.log(bankersRounding(0.4)); // 0
console.log(bankersRounding(0.6)); // 1
console.log(bankersRounding(0.5)); // 0
console.log(bankersRounding(1.5)); // 2
console.log(bankersRounding(1.24, 1)); // 1.2
console.log(bankersRounding(1.26, 1)); // 1.3
console.log(bankersRounding(1.25, 1)); // 1.2

//num的最後一位數確認是多少
//if num最後一位數字>=6，就+1，Math.ceil()
//if num最後一位數字<=4，就+0，Math.floor()
//if num最後一位數字等於5，就要看前面的是偶數還是奇數，
//如果是偶數，就+0、如果是奇數，就+1

// function cal(n) {
//   if (n >= 4) {
//     return 0;
//   }
// }

// if ((num % 1) * 10 <= 4) {
//   return Math.floor(num).toFixed(digits);
// } else if ((num % 1) * 10 >= 6) {
//   console.log((num % 1) * 10);
//   return Math.ceil(num).toFixed(digits);
// } else if ((num % 1) * 10 === 5) {
//   return Math.ceil(num).toFixed(digits);
// }

// const str = num.toString().split("");
//   console.log(str);
//   function identifyDigits(num, digits = 0) {
//     if (digits === 1) {
//       return Math.floor(num * 10) / 10;
//     }
//     return Math.floor(num);
//   }
//   console.log(identifyDigits(num, digits));
//   for (let i = 0; i < str.length; i++) {
//     if (str[str.length - 1] >= 6) {
//       return (Math.floor(num * 10) / 10).toFixed(digits);
//     } else if (str[str.length - 1] <= 4) {
//       return identifyDigits(num, digits);
//     } else if (str[str.length - 1] == 5) {
//       return Math.floor(num).toFixed(digits);
//     }
//   }
