/**
 * Counts the frequency of the search term in the text.
 * @param {string} text - The text to analyze.
 * @param {string} searchTerm - The term to search for.
 * @param {boolean} ignoreCase - Whether to ignore case when searching for the term.
 * @returns {number} The frequency of the search term in the text.
 */
export function countSearchFrequency(text: string, searchTerm: string, ignoreCase: boolean): number {
  if (!searchTerm) {
    return 0;
  }

  const regex = new RegExp(escapeRegExp(searchTerm), ignoreCase ? 'gi' : 'g');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

/**
 * Escapes special characters in a regular expression.
 * @param {string} string - The input string.
 * @returns {string} The string with special characters escaped.
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
