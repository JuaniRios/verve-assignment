const { areAnagrams } = require('./areAnagrams');

function hasAnagram(word, sentence) {
  const wordList = sentence.split(/\s+/);
  const anagrams = [];
  for (const split_word of wordList) {
    if (areAnagrams(word, split_word)) {
      anagrams.push(split_word.toLowerCase());
    }
  }
  return anagrams;
}

module.exports = { hasAnagram };
