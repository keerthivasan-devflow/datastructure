// function WordContainingCharacter(arr, x) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].includes(x)) {
//       res.push(i);
//     }
//   }
//   return res;
// }
// console.log(WordContainingCharacter(["leet", "code"], "e"));
// console.log(WordContainingCharacter(["leet", "code"], "s"));
// console.log(WordContainingCharacter(["leet", "code"], "d"));

function FindCharacter(arr, x) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === x) {
        res.push(i);
        break;
      }
    }
  }
  return res;
}

console.log(FindCharacter(["leet", "code"], "e"));
console.log(FindCharacter(["leet", "code"], "s"));
console.log(FindCharacter(["leet", "code"], "d"));
