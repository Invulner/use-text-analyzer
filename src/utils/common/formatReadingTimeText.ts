/**
 * Formats the reading time into a human-readable string.
 * @param {number} minutes - The total number of minutes.
 * @returns {string} The formatted reading time as a human-readable string.
 */
export function formatReadingTimeText(minutes: number): string {
  if (minutes < 1) {
    return 'less than a minute read';
  }

  return `${minutes} min read`;
}
