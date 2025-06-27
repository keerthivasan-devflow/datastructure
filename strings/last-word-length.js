function LastWordLengthTraditional(str) {
  str = str.trim();
  str = str.split(" ");
  return str[str.length - 1].length;
}

function LastWordLength(str) {
  let n = str.length - 1;
  let count = 0;
  while (n >= 0) {
    if (str[n] !== " ") break;
    n--;
  }

  while (n >= 0) {
    if (str[n] === " ") break;
    count++;
    n--;
  }
  return count;
}

// console.log(LastWordLength("    I am   a        good boy       "));
// console.log(LastWordLength("Javascript is a scripting language"));
// console.log(LastWordLength(" "));
// console.log(LastWordLength(""));

function LastWordLengthOptimized(str) {
  let n = str.length - 1;
  let count = 0;
  while (n >= 0) {
    if (str[n] !== " ") count++;
    else if (count > 0) break;
    n--;
  }
  return count;
}

console.log(LastWordLengthOptimized("    I am   a        good boy       "));
console.log(LastWordLengthOptimized("Javascript is a scripting language"));
console.log(LastWordLengthOptimized(" "));
console.log(LastWordLengthOptimized(""));
