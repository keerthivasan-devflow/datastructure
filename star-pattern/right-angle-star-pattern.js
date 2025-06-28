
// Here the condition can also be j < i + 1
function rightAngleStarPattern(n){
  for (let i = 0; i < n; i++) {
    let row = " ";
    for (let j = 0; j <= i; j++) {
      row = row + "*";
    }
    console.log(row);
  }
}

rightAngleStarPattern(3)
rightAngleStarPattern(4)
rightAngleStarPattern(5)