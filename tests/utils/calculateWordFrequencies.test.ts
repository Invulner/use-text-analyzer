import { calculateWordFrequencies } from '../../src/utils/calculateWordFrequencies';

describe('calculateWordFrequencies', () => {
  it('should return an empty map when the input text is empty', () => {
    const wordFrequencies = calculateWordFrequencies('', true);
    expect(wordFrequencies.size).toBe(0);
  });

  it('should return the correct word frequencies for the input text', () => {
    const text = 'This is a Test sentence. This Sentence contains repeated Words, repeated words.';
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
    const text = 'This is a Test sentence. This Sentence contains repeated Words, repeated words.';
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

  it('should handle leading and trailing whitespace if ignoreCase is true', () => {
    const text = '   This is a Test test sentence.   ';
    const wordFrequencies = calculateWordFrequencies(text, true);

    expect(wordFrequencies.size).toBe(5);
    expect(wordFrequencies.get('this')).toBe(1);
    expect(wordFrequencies.get('is')).toBe(1);
    expect(wordFrequencies.get('a')).toBe(1);
    expect(wordFrequencies.get('test')).toBe(2);
    expect(wordFrequencies.get('sentence')).toBe(1);
  });

  it('should handle leading and trailing whitespace if ignoreCase is false', () => {
    const text = '   This is a Test test sentence.   ';
    const wordFrequencies = calculateWordFrequencies(text, false);

    expect(wordFrequencies.size).toBe(6);
    expect(wordFrequencies.get('this')).toBe(undefined);
    expect(wordFrequencies.get('is')).toBe(1);
    expect(wordFrequencies.get('a')).toBe(1);
    expect(wordFrequencies.get('Test')).toBe(1);
    expect(wordFrequencies.get('test')).toBe(1);
    expect(wordFrequencies.get('sentence')).toBe(1);
  });

  it('should handle mixed whitespace characters if ignoreCase is true', () => {
    const text = 'This\tis\na\nTest\ttest sentence.';
    const wordFrequencies = calculateWordFrequencies(text, true);

    expect(wordFrequencies.size).toBe(5);
    expect(wordFrequencies.get('this')).toBe(1);
    expect(wordFrequencies.get('is')).toBe(1);
    expect(wordFrequencies.get('a')).toBe(1);
    expect(wordFrequencies.get('test')).toBe(2);
    expect(wordFrequencies.get('Test')).toBe(undefined);
    expect(wordFrequencies.get('sentence')).toBe(1);
  });

  it('should handle mixed whitespace characters if ignoreCase is false', () => {
    const text = 'This\tis\na\nTest\ttest sentence.';
    const wordFrequencies = calculateWordFrequencies(text, false);

    expect(wordFrequencies.size).toBe(6);
    expect(wordFrequencies.get('this')).toBe(undefined);
    expect(wordFrequencies.get('This')).toBe(1);
    expect(wordFrequencies.get('is')).toBe(1);
    expect(wordFrequencies.get('a')).toBe(1);
    expect(wordFrequencies.get('test')).toBe(1);
    expect(wordFrequencies.get('Test')).toBe(1);
    expect(wordFrequencies.get('sentence')).toBe(1);
  });

  it('should handle non-alphanumeric characters, including emojis if ignoreCase is true', () => {
    const text = 'This:sentence,contains?special-Test+test;characters!@#$%^&* 😊😊😊';
    const wordFrequencies = calculateWordFrequencies(text, true);

    expect(wordFrequencies.size).toBe(6);
    expect(wordFrequencies.get('this')).toBe(1);
    expect(wordFrequencies.get('sentence')).toBe(1);
    expect(wordFrequencies.get('contains')).toBe(1);
    expect(wordFrequencies.get('special')).toBe(1);
    expect(wordFrequencies.get('characters')).toBe(1);
    expect(wordFrequencies.get('test')).toBe(2);
  });

  it('should handle non-alphanumeric characters, including emojis if ignoreCase is false', () => {
    const text = 'This:sentence,contains?special-Test+test;characters!@#$%^&* 😊😊😊';
    const wordFrequencies = calculateWordFrequencies(text, false);

    expect(wordFrequencies.size).toBe(7);
    expect(wordFrequencies.get('this')).toBe(undefined);
    expect(wordFrequencies.get('sentence')).toBe(1);
    expect(wordFrequencies.get('contains')).toBe(1);
    expect(wordFrequencies.get('special')).toBe(1);
    expect(wordFrequencies.get('characters')).toBe(1);
    expect(wordFrequencies.get('test')).toBe(1);
    expect(wordFrequencies.get('Test')).toBe(1);
  });

  it('should handle text containing digits if ignoreCase is true', () => {
    const text = 'This sentence contains numbers like 123 and 456.';
    const wordFrequencies = calculateWordFrequencies(text, true);

    expect(wordFrequencies.size).toBe(8);
    expect(wordFrequencies.get('this')).toBe(1);
    expect(wordFrequencies.get('sentence')).toBe(1);
    expect(wordFrequencies.get('contains')).toBe(1);
    expect(wordFrequencies.get('numbers')).toBe(1);
    expect(wordFrequencies.get('like')).toBe(1);
    expect(wordFrequencies.get('123')).toBe(1);
    expect(wordFrequencies.get('and')).toBe(1);
    expect(wordFrequencies.get('456')).toBe(1);
  });

  it('should handle text containing digits if ignoreCase is false', () => {
    const text = 'This sentence contains numbers like 123 and 456.';
    const wordFrequencies = calculateWordFrequencies(text, false);

    expect(wordFrequencies.size).toBe(8);
    expect(wordFrequencies.get('this')).toBe(undefined);
    expect(wordFrequencies.get('sentence')).toBe(1);
    expect(wordFrequencies.get('contains')).toBe(1);
    expect(wordFrequencies.get('numbers')).toBe(1);
    expect(wordFrequencies.get('like')).toBe(1);
    expect(wordFrequencies.get('123')).toBe(1);
    expect(wordFrequencies.get('and')).toBe(1);
    expect(wordFrequencies.get('456')).toBe(1);
  });
});
