const { areAnagrams } = require('./areAnagrams');

function hasAnagram(word, sentence) {
  /**
   * Check all anagrams of a word in a sentence
   * @param  {string}   word      the first word to find anagrams for
   * @param  {string}   sentence  the sentence to find anagrams in
   * @return {array}              list of anagrams found in the sentence
   *
   * This algorithm goes through each word in the sentence and runs the areAnagrams function on it. If it returns
   * True then it appends it into the result list
   *
   */

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
