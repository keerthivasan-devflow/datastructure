// Approach 1 - Brute force using built-in functions
// Time Complexity - O(n * m log m) where n elements and o(m log m) for sorting time complexity for each element.
// Space Complexity - O(n * m) where n elements and m'characters for each element.
// sortedkeys help us to identify the anagaram uniquely.
function groupanagrams(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let sortedKeys = arr[i].split("").sort().join("");
    if (!map[sortedKeys]) {
      map[sortedKeys] = [arr[i]];
    } else {
      map[sortedKeys].push(arr[i]);
    }
  }
  return Object.values(map);
}

// Approach 2 - using hashmap optimized code implementation
// Time Complexity - O(n * m)
// Space Complexity - O(n * m)
function groupanagrams(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let freqArr = Array(26).fill(0);
    let word = arr[i];
    for (let j = 0; j < word.length; j++) {
      let index = word.charCodeAt(j) - 97;
      freqArr[index]++;
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      key = key + String.fromCharCode(k + 97) + freqArr[k]; // key = key + "#" + freqArr[k];
    }

    if (!map[key]) {
      map[key] = [word];
    } else {
      map[key].push(word);
    }
  }
  return Object.values(map);
}

console.log(groupanagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
