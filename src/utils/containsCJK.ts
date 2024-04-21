/**
 * Determines if the provided text contains any CJK (Chinese, Japanese, Korean) characters.
 * @param {string} text - The text to check for CJK characters.
 * @returns {boolean} True if CJK characters are found, otherwise false.
 */

export const containsCJK = (text: string): boolean => {
  return /[\u4E00-\u9FFF\u3400-\u4DBF\u3000-\u303F\uAC00-\uD7AF\u3040-\u309F\u30A0-\u30FF]/.test(text);
};
