import { containsCJK } from '../../src/utils/common/containsCJK';

describe('containsCJK', () => {
  it('returns true for strings containing Chinese characters', () => {
    expect(containsCJK('这是中文')).toBe(true);
  });

  it('returns true for strings containing Japanese characters', () => {
    expect(containsCJK('これは日本語です')).toBe(true);
    expect(containsCJK('カタカナ')).toBe(true);
    expect(containsCJK('ひらがな')).toBe(true);
  });

  it('returns true for strings containing Korean characters', () => {
    expect(containsCJK('이것은 한국어입니다')).toBe(true);
  });

  it('returns false for strings containing only Latin alphabet characters', () => {
    expect(containsCJK('This is English text')).toBe(false);
  });

  it('returns false for empty strings', () => {
    expect(containsCJK('')).toBe(false);
  });
});
