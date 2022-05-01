const chai = require('chai');

const { expect } = chai;

// const app = require('../../src/app');
const deepEqualInAnyOrder = require('deep-equal-in-any-order');
const { getAllAnagrams } = require('../../src/functions/getAllAnagrams');
const {hasAnagram} = require("../../src/functions/hasAnagram");

chai.use(deepEqualInAnyOrder);
describe('correctly identifies anagrams in sentences', () => {
  const sentenceResponsePair = [
    [
      'Elvis lives in a house. His cat can act. He has a study that’s dusty.',
      [['elvis', 'lives'], ['cat', 'act'], ['study', 'dusty']]
    ],
    [
      '',
      []
    ],
    [
      'elvis is a musician',
      []
    ],
    [
      'elvis elvis',
      []
    ]
  ];

  for (const [sentence, response] of sentenceResponsePair) {
    it('should find the correct groups ', () => {
      const groups = getAllAnagrams(sentence);
      expect(groups).to.deep.equalInAnyOrder(response);
    });
  }
});

describe('Throws error on sentences with non alphabet characters', () => {
  const sentences = [
    '@#Sd23',
    'elvis lives he@re',
    'viles elvis @#',
    '231 elvis dawd'
  ];

  for (const sentence of sentences) {
    it(`should throw error in this sentence: ${sentence}`, () => {
      expect(() => getAllAnagrams(sentence).to.throw('non english alphabet character detected!'));
    });
  }
});

