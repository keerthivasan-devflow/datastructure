function findStonesAndJewels(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    if (jewels.includes(stones[i])) count++;
  }
  return count;
}

console.log(findStonesAndJewels("aAb", "aAAaAbbbB"));
console.log(findStonesAndJewels("xyz", "aAAaAbbbB"));

// Optimized Code without using any built-in functions
function findJewels(jewels, stones) {
  let count = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewels.length; j++) {
      if (jewels[j] === stones[i]) {
        count++;
        break;
      }
    }
  }
  return count;
}

// Optimized Code using [new Set()]
// Hint : jewels must be unique, but stones can be duplicated!
function findJewels(jewels, stones) {
  let jewels = new Set();
  for (let i = 0; i < jewels.length; i++) {
    jewels.add(jewels[i]);
  }

  let count = 0;
  for (let j = 0; j < stones.length; j++) {
    if (jewels.has(stones[j])) {
      count++;
    }
  }
  return count;
}

console.log(findJewels("aAb", "aAAaAbbbB"));
console.log(findJewels("xyz", "aAAaAbbbB"));
