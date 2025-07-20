var characterReplacement = function (s, k) {
  let i = (j = 0);
  let map = Array(26).fill(0);
  map[s[0].charCodeAt(0) - 65] = 1;
  let maxWS = 0;

  while (j < s.length) {
    if (isWindowValid(map, k)) {
      maxWS = Math.max(maxWS, j - i + 1);
      j++;
      map[s.charCodeAt(j) - 65]++;
    } else {
      map[s.charCodeAt(i) - 65]--;
      i++;
    }
  }
  return maxWS;
};

var isWindowValid = function (map, k) {
  let totalCount = 0;
  let maxCount = 0;
  for (let i = 0; i < 26; i++) {
    let char = String.fromCharCode(i + 65);
    if (map[char]) {
      totalCount += map[char];
      maxCount = Math.max(maxCount, map[char]);
    }
  }
  return totalCount - maxCount <= k;
};
