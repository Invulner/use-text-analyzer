/**
 * Calculates character frequencies in the given text.
 * @param {string} text - The text to analyze.
 * @param {boolean} ignoreCase - Whether to ignore case when counting character frequencies.
 * @returns {Map<string, number>} A map containing character frequencies.
 */
export function calculateCharFrequencies(text: string, ignoreCase: boolean): Map<string, number> {
  const charsMap = new Map<string, number>();

  const characters = text.replace(/\s+/g, '').split('');

  characters.forEach((char) => {
    const normalizedChar = ignoreCase ? char.toLowerCase() : char;
    const count = charsMap.get(normalizedChar) || 0;
    charsMap.set(normalizedChar, count + 1);
  });

  return charsMap;
}
