/**
 * Estimates the reading time of the text in seconds.
 * @param {number} wordCount - The number of words in the text.
 * @returns {number} The estimated reading time of the text in seconds.
 */
export function estimateReadingTime(wordCount: number): number {
  // Assuming average reading speed of 200 words per minute
  const wordsPerMinute = 200;

  return Math.ceil(wordCount / (wordsPerMinute / 60));
}
