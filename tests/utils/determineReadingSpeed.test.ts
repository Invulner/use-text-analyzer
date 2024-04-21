import { determineReadingSpeed } from '../../src/utils/determineReadingSpeed';
import { WORDS_PER_MINUTE, CJK_WORDS_PER_MINUTE } from '../../src/constants';

describe('determineReadingSpeed', () => {
  it('should return user-provided WPM ', () => {
    expect(determineReadingSpeed('Example text.', 300)).toBe(300);
    expect(determineReadingSpeed('这是一些示例文本。', 300)).toBe(300);
  });

  it('should return default WPM for non-CJK text if WPM is not provided by user', () => {
    expect(determineReadingSpeed('This is some example text.')).toBe(WORDS_PER_MINUTE);
  });

  it('should return default WPM for CJK text if WPM is not provided by user', () => {
    expect(determineReadingSpeed('这是一些示例文本。')).toBe(CJK_WORDS_PER_MINUTE);
  });

  it('should ignore invalid WPM inputs and use default WPM', () => {
    // @ts-expect-error edge case when wordsPerMinute is a string
    expect(determineReadingSpeed('This is some example text.', 'not-a-number')).toBe(WORDS_PER_MINUTE);
    // @ts-expect-error edge case when wordsPerMinute is a string
    expect(determineReadingSpeed('这是一些示例文本。', 'not-a-number')).toBe(CJK_WORDS_PER_MINUTE);
  });

  it('should handle empty string inputs', () => {
    expect(determineReadingSpeed('', 300)).toBe(300);
    expect(determineReadingSpeed('')).toBe(WORDS_PER_MINUTE);
  });
});
