// 編號：CANDY-016
// 程式語言：JavaScript
// 題目：把原本 snake_case 的字轉換成 camelCase 格式
// 範例："hello_world" -> "helloWorld"

function toCamelCase(str) {
  // 實作寫在這裡
  const camelCase = str.split("_").map((s, i) => {
    if (i !== 0) {
      return s.replace(s[0], s.charAt(0).toUpperCase());
    }
    return s;
  });
  return camelCase.join("");
}

console.log(toCamelCase("book")); // book
console.log(toCamelCase("book_store")); // bookStore
console.log(toCamelCase("get_good_score")); // getGoodScore

//思考如何在判斷後，改寫成大寫
//replace()
//search()
//toLocaleUpperCase()

// const regex = /_/g;
// let single = "";
// for (let s = 0; s < str.length; s++) {
//   // console.log(str[s]);
//   if (str[s] === "_") {
//     // console.log(str[s + 1].toLocaleUpperCase());
//     return (single += str[s + 1].toLocaleUpperCase());
//   }
// }
// console.log(single);
// const find = str.search(regex);
// console.log(find);
