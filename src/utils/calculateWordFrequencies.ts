/**
 * Calculates word frequencies in the given text.
 * @param {string} text - The text to analyze.
 * @param {boolean} ignoreCase - Whether to ignore case when counting word frequencies.
 * @returns {Map<string, number>} A map containing word frequencies.
 */
export function calculateWordFrequencies(text: string, ignoreCase: boolean): Map<string, number> {
  const wordsMap = new Map<string, number>();

  if (!text) {
    return wordsMap;
  }

  // Remove punctuation and split text into words
  const words = text.replace(/[^\w\s]/g, '').split(/\s+/);

  words.forEach((word) => {
    const normalizedWord = ignoreCase ? word.toLowerCase() : word;
    const count = wordsMap.get(normalizedWord) || 0;
    wordsMap.set(normalizedWord, count + 1);
  });

  return wordsMap;
}
