import { renderHook } from '@testing-library/react-hooks';

import useTextAnalyzer from '../../src/useTextAnalyzer';

describe('useTextAnalyzer', () => {
  it('should handle empty input correctly', () => {
    const { result } = renderHook(() => useTextAnalyzer({ text: '' }));

    expect(result.current).toEqual({
      wordCount: 0,
      charCount: 0,
      sentenceCount: 0,
      paragraphCount: 0,
      searchFrequency: 0,
      readingTime: 0,
      mostFrequentWord: '',
      leastFrequentWord: '',
      mostFrequentCharacter: '',
      leastFrequentCharacter: '',
    });
  });

  it('should handle text parameter with multiple paragraphs and sentences with whitespace variations', () => {
    const text = '   This is a  test.   This is another test.\n    This is a third paragraph.    ';
    const { result } = renderHook(() => useTextAnalyzer({ text }));

    expect(result.current).toEqual({
      wordCount: 13,
      charCount: 71,
      sentenceCount: 3,
      paragraphCount: 2,
      searchFrequency: 0,
      readingTime: 4,
      mostFrequentWord: 'this',
      leastFrequentWord: 'another',
      mostFrequentCharacter: 't',
      leastFrequentCharacter: 'n',
    });
  });

  it('should handle text parameter with multiple paragraphs and sentences with searchTerm', () => {
    const text = `  This iS the first  paragraph.    It has multiple sentences.
    this is the second paragraph. It also has multiple sentences.    `;
    const { result } = renderHook(() => useTextAnalyzer({ text, searchTerm: 'second' }));

    expect(result.current).toEqual({
      wordCount: 19,
      charCount: 125,
      sentenceCount: 4,
      paragraphCount: 2,
      searchFrequency: 1,
      readingTime: 6,
      mostFrequentWord: 'this',
      leastFrequentWord: 'first',
      mostFrequentCharacter: 's',
      leastFrequentCharacter: 'f',
    });
  });

  it('should handle text parameter with multiple paragraphs and sentences with searchTerm when ignoreCase is true', () => {
    const text = `  This iS the first  paragraph.    It has multiple sentences.
    this is the second paragraph. It also has multiple sentences.    `;
    const { result } = renderHook(() => useTextAnalyzer({ text, searchTerm: 'second', ignoreCase: true }));

    expect(result.current).toEqual({
      wordCount: 19,
      charCount: 125,
      sentenceCount: 4,
      paragraphCount: 2,
      searchFrequency: 1,
      readingTime: 6,
      mostFrequentWord: 'this',
      leastFrequentWord: 'first',
      mostFrequentCharacter: 's',
      leastFrequentCharacter: 'f',
    });
  });

  it('should handle text parameter with multiple paragraphs and sentences with searchTerm when ignoreCase is false', () => {
    const text = `  This iS the first  paragraph.    It has multiple sentences.
    this is the second paragraph. It also has multiple sentences.    `;
    const { result } = renderHook(() => useTextAnalyzer({ text, searchTerm: 'second', ignoreCase: false }));

    expect(result.current).toEqual({
      wordCount: 19,
      charCount: 125,
      sentenceCount: 4,
      paragraphCount: 2,
      searchFrequency: 1,
      readingTime: 6,
      mostFrequentWord: 'the',
      leastFrequentWord: 'This',
      mostFrequentCharacter: 's',
      leastFrequentCharacter: 'T',
    });
  });

  it('should handle text parameter with multiple paragraphs and sentences with searchTerm when trimText is true', () => {
    const text = `  This iS the first  paragraph.    It has multiple sentences.
    this is the second paragraph. It also has multiple sentences.    `;
    const { result } = renderHook(() => useTextAnalyzer({ text, searchTerm: 'second', trimText: true }));

    expect(result.current).toEqual({
      wordCount: 19,
      charCount: 125,
      sentenceCount: 4,
      paragraphCount: 2,
      searchFrequency: 1,
      readingTime: 6,
      mostFrequentWord: 'this',
      leastFrequentWord: 'first',
      mostFrequentCharacter: 's',
      leastFrequentCharacter: 'f',
    });
  });

  it('should handle text parameter with multiple paragraphs and sentences with searchTerm when trimText is false', () => {
    const text = `  This iS the first  paragraph.    It has multiple sentences.
    this is the second paragraph. It also has multiple sentences.    `;
    const { result } = renderHook(() => useTextAnalyzer({ text, searchTerm: 'second', trimText: false }));

    expect(result.current).toEqual({
      wordCount: 19,
      charCount: 131,
      sentenceCount: 4,
      paragraphCount: 2,
      searchFrequency: 1,
      readingTime: 6,
      mostFrequentWord: 'this',
      leastFrequentWord: 'first',
      mostFrequentCharacter: 's',
      leastFrequentCharacter: 'f',
    });
  });
});
