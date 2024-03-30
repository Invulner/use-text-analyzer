/**
 * Counts the number of paragraphs in the text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of paragraphs in the text.
 */
export function countParagraphs(text: string): number {
  return text.trim().split(/\n+/).filter(Boolean).length;
}
