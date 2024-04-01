/**
 * Calculates character frequencies in the given text.
 * @param {string} text - The text to analyze.
 * @param {boolean} ignoreCase - Whether to ignore case when counting character frequencies.
 * @returns {Map<string, number>} A map containing character frequencies.
 */
export function calculateCharFrequencies(text: string, ignoreCase: boolean): Map<string, number> {
  const charsMap = new Map<string, number>();

  // Split the text into individual Unicode characters
  // The Array.from() method is used to split the text into an array of individual Unicode characters.
  // This ensures that each character, including emojis and characters outside the Basic Multilingual Plane (BMP),
  // is treated as a single element in the array.
  // The regular expression /\s+/g is used to remove whitespace characters from the text before splitting it.
  // This ensures that whitespace characters are not counted as separate characters in the result.
  const characters = Array.from(text.replace(/\s+/g, ''));

  characters.forEach((char) => {
    const normalizedChar = ignoreCase ? char.toLowerCase() : char;
    const count = charsMap.get(normalizedChar) || 0;
    charsMap.set(normalizedChar, count + 1);
  });

  return charsMap;
}
