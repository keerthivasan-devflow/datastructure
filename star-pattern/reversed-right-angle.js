// function reversedRightAngle(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = " ";
//     for (let j = n; j >= i; j--) {
//       row = row + (i);
//     }
//     console.log(row);
//   }
// }

function reversedRightAngle(n) {
  for (let i = 0; i <= n; i++) {
    let row = " ";
    for (let j = 0; j < n - i; j++) {
      row = row + (j + 1);
    }
    console.log(row);
  }
}

reversedRightAngle(5);
