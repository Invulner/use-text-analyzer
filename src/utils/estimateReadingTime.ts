import { formatReadingTimeText } from './common/formatReadingTimeText';

/**
 * Estimates the reading time of the text in seconds.
 * @param wordCount - The number of words in the text.
 * @param wordsPerMinute - The number of words a person can read per minute (optional, default from constants).
 * @returns {number} The estimated reading time of the text in seconds.
 */
export function estimateReadingTime(
  wordCount: number,
  wordsPerMinute: number,
): {
  minutes: number;
  seconds: number;
  total: number;
  text: string;
} {
  const totalMinutes = wordCount / wordsPerMinute;
  const roundedMinutes = Math.floor(totalMinutes);
  const seconds = Math.round((totalMinutes - roundedMinutes) * 60);
  const totalSeconds = Math.round(totalMinutes * 60);
  const readableText = formatReadingTimeText(roundedMinutes);

  return {
    minutes: roundedMinutes,
    seconds,
    total: totalSeconds,
    text: readableText,
  };
}
