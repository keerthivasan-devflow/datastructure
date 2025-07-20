// Approach 1 - Brute force using built-in functions
function anagram(s, t) {
  return s.split("").sort().join("") === t.split("").sort().join("");
}

// Approach 2 - optimized code implementation using hashmaps
function validAnagram(s, t) {
  if (s.length !== t.length) return false;

  let smap = {};
  let tmap = {};

  for (let i = 0; i < s.length; i++) {
    smap[s[i]] = (smap[s[i]] || 0) + 1;
    tmap[t[i]] = (tmap[t[i]] || 0) + 1;
  }

  for (let key in smap) {
    if (smap[key] !== tmap[key]) return false;
  }

  return true;
}

console.log(validAnagram("apple", "lppea"));
console.log(validAnagram("cat", "rat"));

function validAnagram2(s, t) {
  if (s.length !== t.length) return false;

  let map = {};
  for (let i = 0; i < s.length; i++) {
    map[s[i]] = (map[s[i]] || 0) + 1;
  }

  for (let i = 0; i < t.length; i++) {
    if (!map[t[i]] || map[t[i]] < 0) return false;
    else --map[t[i]];
  }

  return true;
}

console.log(validAnagram2("apple", "lppea"));
console.log(validAnagram2("cat", "rat"));