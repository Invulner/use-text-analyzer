/**
 * Counts the number of sentences in the text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of sentences in the text.
 */
export function countSentences(text: string): number {
  return text
    .trim()
    .split(/[.!?。！？]+/)
    .filter(Boolean).length;
}
