/**
 * Counts the number of words in the text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of words in the text.
 */
export function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}
