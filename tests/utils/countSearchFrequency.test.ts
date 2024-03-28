import { countSearchFrequency } from '../../src/utils/countSearchFrequency';

describe('countSearchFrequency', () => {
  describe('with ignoreCase: true', () => {
    it('should return 0 when the text is empty', () => {
      expect(countSearchFrequency('', 'searchTerm', true)).toBe(0);
    });

    it('should return 0 when no search term is provided', () => {
      expect(countSearchFrequency('This is a test text.', '', true)).toBe(0);
    });

    it('should return 0 when the search term is not found', () => {
      expect(countSearchFrequency('This is a test text.', 'missing', true)).toBe(0);
    });

    it('should return the correct frequency of the search term in the text, ignoring case', () => {
      expect(countSearchFrequency('This is a test text.', 'test', true)).toBe(1);
      expect(countSearchFrequency('This is a test test test text.', 'Test', true)).toBe(3);
    });
  });

  describe('with ignoreCase: false', () => {
    it('should return 0 when the text is empty', () => {
      expect(countSearchFrequency('', 'searchTerm', false)).toBe(0);
    });

    it('should return 0 when no search term is provided', () => {
      expect(countSearchFrequency('This is a test text.', '', false)).toBe(0);
    });

    it('should return 0 when the search term is not found', () => {
      expect(countSearchFrequency('This is a test text.', 'missing', false)).toBe(0);
    });

    it('should return the correct frequency of the search term in the text, ignoring case', () => {
      expect(countSearchFrequency('This is a test text.', 'test', false)).toBe(1);
      expect(countSearchFrequency('This is a test test test text.', 'Test', false)).toBe(0);
    });
  });
});
