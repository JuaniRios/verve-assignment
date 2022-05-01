const { expect } = require('chai');
// const app = require('../../src/app');
const { hasAnagram } = require('../../src/functions/hasAnagram');

describe('correctly identifies anagrams in sentences', () => {
  const anagramSentencePair = [
    [['Elvis', 'Elvis lives in a house'], ['elvis', 'lives']],
    [['peach', 'Cheap rent here'], ['cheap']],
    [['angel', 'angel does glean from time to time'], ['angel', 'glean']],
    [['some', 'this sentence has no anagram'], []]
  ];

  for (const [pair, response] of anagramSentencePair) {
    it(`should return ${response}`, () => {
      expect(hasAnagram(...pair)).to.have.all.members(response);
    });
  }
});

describe('raises error on NON english alphabet words', () => {
  const badPairs = [
    ['ang_el', 'angel has wings'],
    ['c%ar', 'arca c%ar'],
    ['brag', 'grab$s dwad sds'],
    ['st)udy', 'sssss@#E'],
    ['pea@ch', 'pea@ch'],
    ['taste', 'h!ome'],
    ['13', '22 31 33 13'],
  ];

  for (const badPair of badPairs) {
    it('should raise error', () => {
      expect(() => hasAnagram(...badPair)).to.throw('non english alphabet letter detected!');
    });
  }
});
