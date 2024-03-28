import { calculateWordFrequencies } from '../../src/utils/calculateWordFrequencies';

describe('calculateWordFrequencies', () => {
  const text = 'This is a Test sentence. This Sentence contains repeated Words, repeated words.';

  it('should return an empty map when the input text is empty', () => {
    const wordFrequencies = calculateWordFrequencies('', true);
    expect(wordFrequencies.size).toBe(0);
  });

  it('should return the correct word frequencies for the input text', () => {
    const wordFrequencies = calculateWordFrequencies(text, true);

    expect(wordFrequencies.size).toBe(8);
    expect(wordFrequencies.get('this')).toBe(2);
    expect(wordFrequencies.get('is')).toBe(1);
    expect(wordFrequencies.get('a')).toBe(1);
    expect(wordFrequencies.get('test')).toBe(1);
    expect(wordFrequencies.get('sentence')).toBe(2);
    expect(wordFrequencies.get('contains')).toBe(1);
    expect(wordFrequencies.get('repeated')).toBe(2);
    expect(wordFrequencies.get('words')).toBe(2);
  });

  it('should not ignore case when counting word frequencies if ignoreCase is false', () => {
    const wordFrequencies = calculateWordFrequencies(text, false);

    expect(wordFrequencies.size).toBe(10);
    expect(wordFrequencies.get('This')).toBe(2);
    expect(wordFrequencies.get('is')).toBe(1);
    expect(wordFrequencies.get('a')).toBe(1);
    expect(wordFrequencies.get('Test')).toBe(1);
    expect(wordFrequencies.get('sentence')).toBe(1);
    expect(wordFrequencies.get('contains')).toBe(1);
    expect(wordFrequencies.get('repeated')).toBe(2);
    expect(wordFrequencies.get('words')).toBe(1);
  });
});
