function getAllAnagrams(sentence) {
  /**
   * get all anagram groups in a single sentence
   * @param  {string}   sentence  the sentence to find the anagrams in
   * @return {array}              list of lists of anagrams found in the sentence
   *
   * This algorithm goes does a different implementation than previous ones. It relies on the mathematical fact that
   * prime number multiplications are unique (i.e. you cannot get that number by multiplying any other numbers).
   *
   * 1) we assign each letter in the english alphabet to a prime number
   * 2) we go through each word in the sentence and:
   * 3) we compute the prime multiplication and store it in a hashmap with the multiplication being the key, and
   * a list of equal multiplication words as the value.
   * 4) we return the values of the hashmap
   */
  const result = [];
  const wordList = sentence.split(/\s+/);
  const multMap = {};
  const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  function reduceOrThrow(residual, char) {
    if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
      // letter a starts at 97 in unicode/ascii. our primes array starts a 0. So to each letter's prime equivalent we
      // get the unicode and subtract 97
      return residual * primes[char.charCodeAt() - 97];
    }
    throw new Error('non english alphabet character detected!');
  }

  for (let word of wordList) {
    word = word.toLowerCase(); // make it lower case
    word = word.replace(/\.|\'|’/, ''); //remove punctuation and apostrophes
    // we use the reduce function since it's a fast way to multiply elements together
    const primeProduct = word.split('').reduce(reduceOrThrow, 1);

    // check if there's an element on this prime multiplication index. if so then append the word. if not then create the
    // list
    const defaultMapArray = multMap[primeProduct] ?? [];
    if ( !(defaultMapArray.includes(word)) ) {
      defaultMapArray.push(word)
      multMap[primeProduct] = defaultMapArray
    }

  }

  for (const group of Object.values(multMap)) {
    if (group.length > 1) {
      result.push(group);
    }
  }

  return result;
}

module.exports = { getAllAnagrams };
