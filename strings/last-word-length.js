// Approach 1 - Using built-in functions
function LastWordLengthTraditional(str) {
  str = str.trim();
  str = str.split(" ");
  return str.at(-1).length;
}
console.log(LastWordLengthTraditional("    I am   a        good boy       "));
console.log(LastWordLengthTraditional("Javascript is a scripting language"));
console.log(LastWordLengthTraditional(" "));
console.log(LastWordLengthTraditional(""));

// Approach 2 - opitmized code using double-while loop
function LastWordLength(str) {
  let n = str.length - 1;
  let count = 0;

  while (n >= 0) {
    if (str[n] === " ") {
      n--;
    } else {
      break;
    }
  }

  while (n >= 0) {
    if (str[n] !== " ") {
      count++;
      n--;
    } else {
      break;
    }
  }

  return count;
}

// Approach 3 - opitmized code
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

console.log(LastWordLength("    I am   a        good boy       "));
console.log(LastWordLength("Javascript is a scripting language"));
console.log(LastWordLength(" "));
console.log(LastWordLength(""));

// Approach 4 - opitmized code using single-while loop
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
