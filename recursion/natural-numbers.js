// Print natural numbers from n to 1 using recursion - Decreasing order
function func(num) {
  if (num === 0) return;
  console.log(num);
  num = num - 1;
  func(num);
}

let number = 5;
func(number);

// Print natural numbers from 1 to n using recursion - Increasing order
let n = 5;
function func(x) {
  if (x > n) return;
  console.log(x);
  func(++x);
}

func(1);
