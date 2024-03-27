import { useState, useEffect } from 'react';

/**
 * Options for text analysis.
 */
interface TextAnalyzerOptions {
  /**
   * The text to analyze.
   */
  text: string;
  /**
   * The term to search for in the text.
   */
  searchTerm?: string;
  /**
   * Whether to ignore case when searching for the term and calculating word and character frequencies.
   */
  ignoreCase?: boolean;
}

/**
 * Text analysis result.
 */
interface TextAnalysisResult {
  /**
   * The number of words in the text.
   */
  wordCount: number;
  /**
   * The number of characters in the text.
   */
  charCount: number;
  /**
   * The number of sentences in the text.
   */
  sentenceCount: number;
  /**
   * The number of paragraphs in the text.
   */
  paragraphCount: number;
  /**
   * The frequency of the search term in the text.
   */
  searchFrequency: number;
  /**
   * The estimated reading time of the text in seconds.
   */
  readingTime: number;
  /**
   * The most frequent word in the text.
   */
  mostFrequentWord: string;
  /**
   * The least frequent word in the text.
   */
  leastFrequentWord: string;
  /**
   * The most frequent character in the text.
   */
  mostFrequentCharacter: string;
  /**
   * The least frequent character in the text.
   */
  leastFrequentCharacter: string;
}

/**
 * Analyzes the given text and returns various statistics about it.
 * @param {TextAnalyzerOptions} options - Options for text analysis.
 * @returns {TextAnalysisResult} An object containing various statistics about the text.
 */
function useTextAnalyzer({ text, searchTerm = '', ignoreCase = true }: TextAnalyzerOptions): TextAnalysisResult {
  const processedText = text.trim();
  const [analysisResult, setAnalysisResult] = useState<TextAnalysisResult>(() => calculateStats(processedText, searchTerm, ignoreCase));

  useEffect(() => {
    setAnalysisResult(calculateStats(processedText, searchTerm, ignoreCase));
  }, [processedText, searchTerm, ignoreCase]);

  return analysisResult;
}

/**
 * Calculates text analysis statistics.
 * @param text - The text to analyze.
 * @param searchTerm - The term to search for.
 * @param ignoreCase - Whether to ignore case when searching for the term and calculating word and character frequencies.
 * @returns The text analysis statistics.
 */
function calculateStats(text: string, searchTerm: string, ignoreCase: boolean): TextAnalysisResult {
  const wordCount = countWords(text);
  const charCount = countCharacters(text);
  const sentenceCount = countSentences(text);
  const paragraphCount = countParagraphs(text);
  const searchFrequency = searchTerm ? countSearchFrequency(text, searchTerm, ignoreCase) : 0;
  const readingTime = estimateReadingTime(wordCount);
  const wordsMap = calculateWordFrequencies(text, ignoreCase);
  const charsMap = calculateCharFrequencies(text, ignoreCase);
  const [mostFrequentWord, leastFrequentWord] = findMostAndLeastFrequent(wordsMap);
  const [mostFrequentCharacter, leastFrequentCharacter] = findMostAndLeastFrequent(charsMap);

  return {
    wordCount,
    charCount,
    sentenceCount,
    paragraphCount,
    searchFrequency,
    readingTime,
    mostFrequentWord,
    leastFrequentWord,
    mostFrequentCharacter,
    leastFrequentCharacter,
  };
}

/**
 * Counts the number of words in the text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of words in the text.
 */
function countWords(text: string): number {
  return text.split(/\s+/).filter(Boolean).length;
}

/**
 * Counts the number of characters in the text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of characters in the text.
 */
function countCharacters(text: string): number {
  return text.length;
}

/**
 * Counts the number of sentences in the text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of sentences in the text.
 */
function countSentences(text: string): number {
  return text.split(/[.!?]+/).filter(Boolean).length;
}

/**
 * Counts the number of paragraphs in the text.
 * @param {string} text - The text to analyze.
 * @returns {number} The number of paragraphs in the text.
 */
function countParagraphs(text: string): number {
  return text.split(/\n\s*\n/).filter(Boolean).length;
}

/**
 * Counts the frequency of the search term in the text.
 * @param {string} text - The text to analyze.
 * @param {string} searchTerm - The term to search for.
 * @param {boolean} ignoreCase - Whether to ignore case when searching for the term.
 * @returns {number} The frequency of the search term in the text.
 */
function countSearchFrequency(text: string, searchTerm: string, ignoreCase: boolean): number {
  const regex = new RegExp(escapeRegExp(searchTerm), ignoreCase ? 'gi' : 'g');
  const matches = text.match(regex);
  return matches ? matches.length : 0;
}

/**
 * Estimates the reading time of the text in seconds.
 * @param {number} wordCount - The number of words in the text.
 * @returns {number} The estimated reading time of the text in seconds.
 */
function estimateReadingTime(wordCount: number): number {
  // Assuming average reading speed of 200 words per minute
  const wordsPerMinute = 200;

  return Math.ceil(wordCount / (wordsPerMinute / 60));
}

/**
 * Escapes special characters in a regular expression.
 * @param {string} string - The input string.
 * @returns {string} The string with special characters escaped.
 */
function escapeRegExp(string: string): string {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

/**
 * Calculates word frequencies in the given text.
 * @param {string} text - The text to analyze.
 * @param {boolean} ignoreCase - Whether to ignore case when counting word frequencies.
 * @returns {Map<string, number>} A map containing word frequencies.
 */
function calculateWordFrequencies(text: string, ignoreCase: boolean): Map<string, number> {
  const wordsMap = new Map<string, number>();

  // Remove punctuation and split text into words
  const words = text.replace(/[^\w\s]/g, '').split(/\s+/);

  words.forEach(word => {
    const normalizedWord = ignoreCase ? word.toLowerCase() : word;
    const count = wordsMap.get(normalizedWord) || 0;
    wordsMap.set(normalizedWord, count + 1);
  });

  return wordsMap;
}

/**
 * Calculates character frequencies in the given text.
 * @param {string} text - The text to analyze.
 * @param {boolean} ignoreCase - Whether to ignore case when counting character frequencies.
 * @returns {Map<string, number>} A map containing character frequencies.
 */
function calculateCharFrequencies(text: string, ignoreCase: boolean): Map<string, number> {
  const charsMap = new Map<string, number>();

  const characters = text.replace(/\s+/g, '').split('');

  characters.forEach(char => {
    const normalizedChar = ignoreCase ? char.toLowerCase() : char;
    const count = charsMap.get(normalizedChar) || 0;
    charsMap.set(normalizedChar, count + 1);
  });

  return charsMap;
}

/**
 * Finds the most and least frequent items in the given map.
 * @param {Map<string, number>} map - The map to analyze.
 * @returns {[string, string]} An array containing the most and least frequent items.
 */
function findMostAndLeastFrequent(map: Map<string, number>): [string, string] {
  let mostFrequent = '';
  let leastFrequent = '';
  let maxCount = 0;
  let minCount = Number.MAX_SAFE_INTEGER;

  map.forEach((count, item) => {
    if (count > maxCount) {
      mostFrequent = item;
      maxCount = count;
    }

    if (count < minCount) {
      leastFrequent = item;
      minCount = count;
    }
  });

  return [mostFrequent, leastFrequent];
}

export default useTextAnalyzer;
