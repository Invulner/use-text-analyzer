import { countSentences } from '../../src/utils/countSentences';

describe('countSentences', () => {
  it('should return 0 when the input text is empty', () => {
    expect(countSentences('')).toBe(0);
  });

  it('should return the correct number of sentences in the text', () => {
    expect(countSentences('This is a test sentence.')).toBe(1);
    expect(countSentences('This is a test sentence. Another sentence.')).toBe(2);
  });

  it('should handle leading and trailing whitespace', () => {
    expect(countSentences('  This is a test sentence.   Another Sentence. ')).toBe(2);
  });

  it('should count sentences when the input text contains sentences with different punctuation marks', () => {
    expect(countSentences('This is a test sentence. Another sentence? Yes, another one!')).toBe(3);
  });

  it('should count sentences when the input text contains sentences separated by different whitespace characters', () => {
    expect(countSentences('This is a test sentence.\nAnother sentence?\tYes, another one!\rAnd one more!')).toBe(4);
  });

  it('should count sentences when there are no spaces between sentences', () => {
    expect(countSentences('This is a test sentence.Another sentence.Yes, another one!')).toBe(3);
  });

  it('should count sentences with ellipses (...)', () => {
    expect(countSentences('This is a test sentence...Another sentence...Yes, another one!')).toBe(3);
  });

  it('should count sentences with multiple exclamation marks (!!!)', () => {
    expect(countSentences('This is a test sentence!!!Another sentence!!!Yes, another one!')).toBe(3);
  });

  it('should count sentences with multiple question marks (???)', () => {
    expect(countSentences('This is a test sentence???Another sentence???Yes, another one???')).toBe(3);
  });

  it('should count sentences with multiple question marks (???)', () => {
    expect(countSentences('This is a test sentence???Another sentence???Yes, another one???')).toBe(3);
  });

  it('should count sentences with multiple combinations of sentence-breaking characters', () => {
    expect(countSentences('This is a test sentence ??...!! Another sentence.?.!.')).toBe(2);
  });
});
