// Approach 2 - using hashmap optimized code implementation
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







//  Group Anagram without using built-in sort
function groupAnagrams(strs) {
  const map = {};
  for (let i = 0; i < strs.length; i++) {
    // Use sorted version as the key
    let s = strs[i];
    // No "restricted" built-ins: if allowed, use this, else falls back to counting.
    let chars = [];
    for (let j = 0; j < s.length; j++) chars.push(s[j]);
    // Simple Bubble Sort (to avoid .sort())
    for (let a = 0; a < chars.length; a++) {
      for (let b = a + 1; b < chars.length; b++) {
        if (chars[a] > chars[b]) {
          let t = chars[a];
          chars[a] = chars[b];
          chars[b] = t;
        }
      }
    }
    let key = "";
    for (let j = 0; j < chars.length; j++) key += chars[j];

    // Group words by key
    if (!map[key]) map[key] = [];
    map[key].push(s);
  }
  // Collect groups
  const result = [];
  for (let k in map) result.push(map[k]);
  return result;
}
