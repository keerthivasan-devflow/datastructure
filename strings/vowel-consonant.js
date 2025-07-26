// Time Complexity - O(n) * O(1) = O(n)
// Eventhough the vowels.includes() exist, it goes through only 5 elements in the array - O(1)
// Space Complexity - O(1) where O(1) is a maximum of english letters of 26 alphabets

function CountVowelAndConsonant(s) {
  let hashmap = {};

  for (let i = 0; i < s.length; i++) {
    hashmap[s[i]] = (hashmap[s[i]] || 0) + 1;
  }

  let vowelCount = 0;
  let consonantCount = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let keys = Object.keys(hashmap);

  for (let i = 0; i < keys.length; i++) {
    if (vowels.includes(keys[i])) {
      if (hashmap[keys[i]] > vowelCount) {
        vowelCount = hashmap[keys[i]];
      }
    } else {
      consonantCount = Math.max(hashmap[keys[i]], consonantCount);
    }
  }

  return {
    maxFrequencyOfVowel: vowelCount,
    maxFrequencyOfConsonant: consonantCount,
    sumOfBoth: vowelCount + consonantCount,
  };
}

console.log(CountVowelAndConsonant("successes"));
console.log(CountVowelAndConsonant("aeiaei"));
