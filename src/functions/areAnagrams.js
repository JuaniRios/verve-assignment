function areAnagrams(str1, str2) {
  /**
   * Check if 2 words are anagrams of each other
   * @param  {string}   str1  the first string to compare
   * @param  {string}   str2  the second string to compare
   * @return {boolean}        whether the strings are anagrams or not
   *
   * This algorithm tries to improve performance by not doing sorting, but using 1 hashmap, and 1 vector
   *
   * 1) create vector of zeroes where each index corresponds to a letter.
   * 2) create a hashmap to link each letter to its position in the vector.
   * 3) go through each letter on first string, and add 1 to the index of its letter on the vector.
   * 4) go through each letter on second string, and subtract 1 to the index of its letter on the vector.
   * 5) check that the list consists of only zeroes. if so return true because they words are anagrams
   */

  const letterHashMap = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  const letterCount = Array(26).fill(0);

  // convert to lower case
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // Count letters of first string
  for (const char of str1) {
    const idx = letterHashMap[char]; // index error on non alphabet letter
    if (idx === undefined) {
      throw new Error('non english alphabet letter detected!');
    }
    letterCount[idx] += 1;
  }

  // Subtract letters of second string
  for (const char of str2) {
    const idx = letterHashMap[char]; // index error on non alphabet letter
    if (idx === undefined) {
      throw new Error('non english alphabet letter detected!');
    }
    letterCount[idx] -= 1;
  }

  // check that array consists of only zeroes
  for (const int of letterCount) {
    if (int !== 0) return false;
  }

  return true;
}

module.exports = { areAnagrams };
