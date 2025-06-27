// Time Complexity - O(n) * O(1) = O(n)
// Eventhough the vowels.includes() exist, it goes through only 5 elements in the array - O(1)
// Space Complexity - O(1) where O(1) is a maximum of english letters of 26 alphabets

function CountVowelAndConsonant(s) {
  let letters = {};
  let maxVowel = 0;
  let maxConsonant = 0;

  for (let i = 0; i < s.length; i++) {
    letters[s[i]] = (letters[s[i]] || 0) + 1;
  }

  let vowels = ["a", "e", "i", "o", "u"];
  let keys = Object.keys(letters);

  for (let i = 0; i < keys.length; i++) {
    if (vowels.includes(keys[i])) {
      maxVowel = Math.max(letters[keys[i]], maxVowel);
    } else {
      maxConsonant = Math.max(letters[keys[i]], maxConsonant);
    }
  }
  return maxConsonant + maxVowel;
}

console.log(CountVowelAndConsonant("successes"));
console.log(CountVowelAndConsonant("aeiaei"));
