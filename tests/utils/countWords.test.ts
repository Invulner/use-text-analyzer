import { countWords } from '../../src/utils/countWords';

describe('countWords', () => {
  it('should return 0 when the input text is empty', () => {
    expect(countWords('')).toBe(0);
  });

  it('should return the correct number of words in the text', () => {
    expect(countWords('This is a test sentence.')).toBe(5);
    expect(countWords('This  is   a    test    sentence.')).toBe(5);
    expect(countWords('  This is a test sentence.  ')).toBe(5);
    expect(countWords('      ')).toBe(0);
    expect(countWords('This sentence contains special characters! @#$%^&*')).toBe(6);
  });
});
