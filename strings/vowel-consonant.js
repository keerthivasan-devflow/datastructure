// Time Complexity - O(n) * O(1) = O(n)
// Eventhough the vowels.includes() exist, it goes through only 5 elements in the array - O(1)
// Space Complexity - O(1) where O(1) is a maximum of english letters of 26 alphabets

function CountVowelAndConsonant(s) {
  let chars = {};

  for (let i = 0; i < s.length; i++) {
    chars[s[i]] = (chars[s[i]] || 0) + 1;
  }

  let vowel = 0;
  let consonant = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  let charkeys = Object.keys(chars);

  for (let i = 0; i < charkeys.length; i++) {
    if (vowels.includes(charkeys[i])) {
      if (chars[charkeys[i]] > vowel) {
        vowel = chars[charkeys[i]];
      }
    } else {
      consonant = Math.max(chars[keys[i]], consonant);
    }
  }
  return consonant + vowel;
}

console.log(CountVowelAndConsonant("successes"));
console.log(CountVowelAndConsonant("aeiaei"));
