function rightAngleTrickyPattern(n) {
  for (let i = 0; i < n; i++) {
    let row = " ";
    // j loop will add an empty spaces
    for (let j = 0; j < n - (i + 1); j++) {
      row = row + "0\t";
    }
    // k loop will add stars
    for (let k = 0; k < i + 1; k++) {
      row = row + "*\t";
    }
    console.log(row);
  }
}

rightAngleTrickyPattern(3);
rightAngleTrickyPattern(4);
