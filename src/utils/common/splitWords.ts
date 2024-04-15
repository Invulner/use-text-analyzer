/**
 * Splits the text into an array of words.
 * @param {string} text - The text to split into words.
 * @returns {string[]} An array containing the words extracted from the text.
 */
export function splitWords(text: string) {
  return text.match(/[\w']+(?:'\w+)*/g) || [];
}
