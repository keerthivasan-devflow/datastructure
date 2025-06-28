// Incase jth index starts from 0, then row = row + (j+1)
function rightAngleJth(n) {
  for (let i = 1; i <= n; i++) {
    let row = " ";
    for (let j = 1; j <= i; j++) {
      row = row + j;
    }
    console.log(row);
  }
}

// function rightAngleIth(n) {
//   for (let i = 1; i <= n; i++) {
//     let row = " ";
//     for (let j = 1; j <= i; j++) {
//       row = row + i + "\t";
//     }
//     console.log(row);
//   }
// }

function rightAngleIth(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
      row = row + (i + 1) + "\t";
    }
    console.log(row);
  }
}

// rightAngleJth(3);
// rightAngleJth(4);

rightAngleIth(3);
rightAngleIth(4);
