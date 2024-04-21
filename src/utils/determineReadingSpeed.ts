import { containsCJK } from './containsCJK';

import { WORDS_PER_MINUTE, CJK_WORDS_PER_MINUTE } from '../constants';

/**
 * Determines the appropriate reading speed based on the content of the text or a provided custom value.
 * @param {string} text - The text to analyze.
 * @param {number} wordsPerMinute - The number of words a person can read per minute (optional).
 * @returns {number} The effective words per minute based on the input or text analysis.
 */
export const determineReadingSpeed = (text: string, wordsPerMinute?: number): number => {
  const wpmNumber = Number(wordsPerMinute);

  if (!isNaN(wpmNumber) && wpmNumber > 0) {
    return wpmNumber;
  }

  return containsCJK(text) ? CJK_WORDS_PER_MINUTE : WORDS_PER_MINUTE;
};
