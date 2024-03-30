import { countWords } from '../../src/utils/countWords';

describe('countWords', () => {
  it('should return 0 when the input text is empty', () => {
    expect(countWords('')).toBe(0);
    expect(countWords('      ')).toBe(0);
  });

  it('should return the correct number of words in the text', () => {
    expect(countWords('This is a test sentence.')).toBe(5);
    expect(countWords('This  is   a    test    sentence.')).toBe(5);
  });

  it('should handle leading and trailing whitespace', () => {
    expect(countWords('   This is a test sentence.   ')).toBe(5);
  });

  it('should handle mixed whitespace characters', () => {
    expect(countWords('This\tis\na\ntest\tsentence.')).toBe(5);
  });

  it('should handle non-alphanumeric characters', () => {
    expect(countWords('This sentence contains special characters! @#$%^&*')).toBe(5);
    expect(countWords('This,sentence.contains:non-alphanumeric?characters!')).toBe(6);
    expect(countWords('This sentence contains 😊 emojis!')).toBe(4);
  });

  it('should handle words containing digits', () => {
    expect(countWords('This sentence contains numbers like 123 and 456.')).toBe(8);
  });
});
