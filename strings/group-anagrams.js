// Approach 1 - Brute force using built-in functions
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
// Approach 1 - Brute force using built-in functions
function groupanagrams(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    let freqArr = Array(26).fill(0);
    let s = arr[i];
    for (let j = 0; j < s.length; j++) {
      let index = s[j].charCodeAt() - "a".charCodeAt();
      freqArr[index]++;
    }

    let key = "";
    for (let k = 0; k < 26; k++) {
      // key = key + String.fromCharCode(k) + freqArr[k];
      key = key + "#" + freqArr[k];
    }

    if (!map[key]) {
      map[key] = [s];
    } else {
      map[key].push(s);
    }
  }
  return Object.values(map);
}

console.log(groupanagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));
