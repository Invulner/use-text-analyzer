import { countCharacters } from '../../src/utils/countCharacters';

describe('countCharacters', () => {
  it('should return 0 when the input text is empty', () => {
    expect(countCharacters('')).toBe(0);
  });

  it('should return the correct number of characters in the text', () => {
    expect(countCharacters('This is a test sentence.')).toBe(24);
    expect(countCharacters('This  is   a    test    sentence.')).toBe(33);
    expect(countCharacters('  This is a test sentence.  ')).toBe(28);
    expect(countCharacters('      ')).toBe(6);
    expect(countCharacters('This sentence contains special characters! @#$%^&*')).toBe(50);
  });

  it('should handle text with newline characters', () => {
    const text = 'This is a test\nwith\nmultiple\nlines.';
    expect(countCharacters(text)).toBe(35);
  });

  it('should handle text with Unicode characters', () => {
    const text = '😀🚀🌟';
    expect(countCharacters(text)).toBe(6);
  });
});
