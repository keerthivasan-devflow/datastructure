function binaryRightAngle(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
      if (j % 2 == 0) row = row + "1";
      else row = row + "0";
    }
    console.log(row);
  }
}

binaryRightAngle(3);
binaryRightAngle(5);

// let toggle = 1;
// function binaryRightAngle(n) {
//   for (let i = 0; i < n; i++) {
//     let row = " ";
//     for (let j = 0; j <= i; j++) {
//       row = row + toggle;
//       if (toggle == 1) toggle = 0;
//       else toggle = 1;
//     }
//     console.log(row);
//   }
// }

// binaryRightAngle(3);
// binaryRightAngle(5);