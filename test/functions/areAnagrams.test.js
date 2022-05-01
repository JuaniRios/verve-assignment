const { expect } = require('chai');
// const app = require('../../src/app');
const { areAnagrams } = require('../../src/functions/areAnagrams');

describe('correctly identifies anagrams', () => {
  const anagrams = [
    ['angel', 'glean'],
    ['car', 'arc'],
    ['brag', 'grab'],
    ['study', 'dusty'],
    ['peach', 'cheap'],
    ['taste', 'state'],
    ['sadder', 'dreads'],
    ['father', 'father'], // same word
  ];

  for (const anagram of anagrams) {
    it(`should return true on ${anagram}`, () => {
      expect(areAnagrams(...anagram)).to.be.equal(true);
    });
  }
});

describe('correctly identifies non-anagrams', () => {
  const not_anagrams = [
    ['angel', 'clean'], // one letter change
    ['car', 'arca'], // adding one letter that is present
    ['brag', 'grabs'], // adding one letter that wasn't present
    ['study', 'sssss'], // same letter always that appeared before
    ['peach', 'bachelor'], // completely different
    ['taste', 'home'],
    ['sadder', 'd'], // one letter
  ];

  for (const not_anagram of not_anagrams) {
    it(`should return false on ${not_anagram}`, () => {
      expect(areAnagrams(...not_anagram)).to.be.equal(false);
    });
  }
});

describe('returns false NON english alphabet words', () => {
  const not_anagrams = [
    ['ang_el', 'ang_el'],
    ['c%ar', 'arca'],
    ['brag', 'grab$s'],
    ['st)udy', 'sssss'],
    ['pea@ch', 'pea@ch'],
    ['taste', 'h!ome'],
    ['sadder', 'ñ'],
  ];

  for (const not_anagram of not_anagrams) {
    it(`should return false on ${not_anagram}`, () => {
      expect(() => areAnagrams(...not_anagram)).to.throw('non english alphabet letter detected!');
    });
  }
});
