// Approach 1 - Brute-Force Solution
// Time Complexity - O(n^2)
// Space Complexity - O(1)
function removeDuplicates_bruteforce(arr) {
  let x = 0;

  for (let i = 1; i < arr.length; i++) {
    // Check if arr[i] already exists in arr[0...x]
    let isDuplicate = false;
    for (let j = 0; j <= x; j++) {
      if (arr[i] === arr[j]) {
        isDuplicate = true;
        break;
      }
    }

    // If not a duplicate, add it to the unique section
    if (!isDuplicate) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }

  return [arr, x + 1];
}

console.log(removeDuplicates_bruteforce([0, 0, 1, 1, 1, 1, 2, 3, 4, 4]));
console.log(removeDuplicates_bruteforce([5, 6, 7, 7, 7, 8]));

// Approach 2 - Optimal Solution
// Time Complexity - O(n)
// Space Complexity - O(1)
function removeDuplicates(arr) {
  let x = 0;
  for (let i = 1; i < arr.length; i++) { // where i can be started from 1 index becauase arr[x] > arr[i] at 0th index will always be false
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  return [arr, x + 1]; // where x + 1 represents the total number of unique elements
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 4, 4]));
console.log(removeDuplicates([5, 6, 7, 7, 7, 8]));

// Approach 3 - Using Set
// Time Complexity - O(n)
// Space Complexity - O(n)
function removeDuplicates_usingSet(arr) {
  return Array.from(new Set([...arr]));
}

console.log(removeDuplicates_usingSet([0, 0, 1, 1, 1, 1, 2, 3, 4, 4]));
console.log(removeDuplicates_usingSet([5, 6, 7, 7, 7, 8]));

function removeDuplicates_usingSet2(arr) {
  let set = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (!set.has(arr[i])) {
      set.add(arr[i]);
    }
  }
  return { uniqueSet: [...set], size: set.size };
}

console.log(removeDuplicates_usingSet2([0, 0, 1, 1, 1, 1, 2, 3, 4, 4]));
console.log(removeDuplicates_usingSet2([5, 6, 7, 7, 7, 8]));
