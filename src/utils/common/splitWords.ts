import { containsCJK } from './containsCJK';

/**
 * Splits the text into an array of words.
 * @param {string} text - The text to split into words.
 * @returns {string[]} An array containing the words extracted from the text.
 */
export function splitWords(text: string) {
  if (containsCJK(text)) {
    return Array.from(text.replace(/\s+/g, ''));
  }

  return text.match(/[\w']+(?:'\w+)*/g) || [];
}
