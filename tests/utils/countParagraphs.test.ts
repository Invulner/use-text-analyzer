import { countParagraphs } from '../../src/utils/countParagraphs';

describe('countParagraphs', () => {
  it('should return 0 when the input text is empty', () => {
    expect(countParagraphs('')).toBe(0);
  });

  it('should return the correct number of paragraphs in the text', () => {
    expect(countParagraphs('This is a single paragraph. This is second sentence.')).toBe(1);
    expect(countParagraphs('This is a paragraph.\nThis is another paragraph.')).toBe(2);
  });

  it('should handle multiple newlines between paragraphs', () => {
    expect(countParagraphs('This is a paragraph.\n\n\nThis is another paragraph.')).toBe(2);
  });

  it('should handle leading and trailing newlines', () => {
    expect(countParagraphs('\nThis is a paragraph.\nThis is another paragraph.\n')).toBe(2);
  });

  it('should handle leading and trailing whitespace', () => {
    expect(countParagraphs('   \nThis is a paragraph.\nThis is another paragraph.\n   ')).toBe(2);
  });

  it('should handle mixed whitespace characters', () => {
    expect(
      countParagraphs('This is a paragraph.\r\nThis is another paragraph.\n\nThis is yet another paragraph.'),
    ).toBe(3);
  });
});
