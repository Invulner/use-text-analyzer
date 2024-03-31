import { renderHook } from '@testing-library/react-hooks';

import useTextAnalyzer from '../../src/useTextAnalyzer';

describe('useTextAnalyzer', () => {
  const text = `
    This is the first paragraph. It's SeCoNd contains multiple words.

    This is the second paragraph! it Contains numbers like 123 and special characters like @#$.

    This iS the third paragraph? It includes emojis like 😀 and unicode characters like éñö.

    This is the fourth paragraph. It's followed by a paragraph.

    This iS tHe fifth Paragraph. It contains whitespace characters like \t and \r.

    This is the sixth Paragraph. It also includes non-alphanumeric characters: %^&*()_+-=[]{}|;:'",<>/\`~.

    This is the seventh paragraph. It's shorter.
`;

  it('should analyze text correctly with searchTerm and when ignoreCase is true', () => {
    const { result } = renderHook(() => useTextAnalyzer({ text: text.trim(), searchTerm: 'SeCoNd', ignoreCase: true }));

    expect(result.current).toEqual({
      wordCount: 80,
      charCount: 560,
      sentenceCount: 14,
      paragraphCount: 7,
      searchFrequency: 2,
      readingTime: 24,
      mostFrequentWord: 'paragraph',
      leastFrequentWord: 'first',
      mostFrequentCharacter: 'a',
      leastFrequentCharacter: '!',
    });
  });

  it('should analyze text correctly with searchTerm and when ignoreCase is false', () => {
    const { result } = renderHook(() =>
      useTextAnalyzer({
        text: text.trim(),
        searchTerm: 'SeCoNd',
        ignoreCase: false,
      }),
    );

    expect(result.current).toEqual({
      wordCount: 80,
      charCount: 560,
      sentenceCount: 14,
      paragraphCount: 7,
      searchFrequency: 1,
      readingTime: 24,
      mostFrequentWord: 'This',
      leastFrequentWord: 'first',
      mostFrequentCharacter: 'a',
      leastFrequentCharacter: 'N',
    });
  });

  it('should analyze text correctly with trimText', () => {
    const { result } = renderHook(() => useTextAnalyzer({ text, trimText: false }));

    expect(result.current).toEqual({
      wordCount: 80,
      charCount: 566,
      sentenceCount: 14,
      paragraphCount: 7,
      searchFrequency: 0,
      readingTime: 24,
      mostFrequentWord: 'paragraph',
      leastFrequentWord: 'first',
      mostFrequentCharacter: 'a',
      leastFrequentCharacter: '!',
    });
  });

  it('should analyze text correctly with searchTerm containing special characters', () => {
    const { result } = renderHook(() =>
      useTextAnalyzer({
        text: text.trim(),
        searchTerm: '@#$',
        ignoreCase: true,
      }),
    );

    expect(result.current).toEqual({
      wordCount: 80,
      charCount: 560,
      sentenceCount: 14,
      paragraphCount: 7,
      searchFrequency: 1,
      readingTime: 24,
      mostFrequentWord: 'paragraph',
      leastFrequentWord: 'first',
      mostFrequentCharacter: 'a',
      leastFrequentCharacter: '!',
    });
  });
});
