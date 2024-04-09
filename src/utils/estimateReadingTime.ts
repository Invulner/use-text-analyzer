import { WORDS_PER_MINUTE } from '../constants';

/**
 * Estimates the reading time of the text in seconds.
 * @param {number} wordCount - The number of words in the text.
 * @returns {number} The estimated reading time of the text in seconds.
 */
export function estimateReadingTime(wordCount: number): number {
  return Math.ceil(wordCount / (WORDS_PER_MINUTE / 60));
}
