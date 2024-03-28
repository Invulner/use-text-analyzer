import { countSentences } from '../../src/utils/countSentences';

describe('countSentences', () => {
  it('should return 0 when the input text is empty', () => {
    expect(countSentences('')).toBe(0);
  });

  it('should return the correct number of sentences in the text', () => {
    expect(countSentences('This is a test sentence.')).toBe(1);
    expect(countSentences('This is a test sentence. Another sentence.')).toBe(2);
    expect(countSentences('This is a test sentence. Another sentence? Yes, another one!')).toBe(3);
    expect(countSentences('This is a test sentence.\nAnother sentence?\tYes, another one!\rAnd one more!')).toBe(4);
  });
});
