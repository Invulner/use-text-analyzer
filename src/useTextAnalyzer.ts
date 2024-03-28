import { useState, useEffect } from 'react';

import {
  countWords,
  countCharacters,
  countSentences,
  countParagraphs,
  countSearchFrequency,
  estimateReadingTime,
  calculateWordFrequencies,
  calculateCharFrequencies,
  findMostAndLeastFrequent,
} from './utils';

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
   * @default true
   */
  ignoreCase?: boolean;
  /**
   * Whether to trim the text before analysis.
   * @default true
   */
  trimText?: boolean;
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
function useTextAnalyzer({
  text,
  searchTerm = '',
  ignoreCase = true,
  trimText = true,
}: TextAnalyzerOptions): TextAnalysisResult {
  const processedText = trimText ? text.trim() : text;

  const [analysisResult, setAnalysisResult] = useState<TextAnalysisResult>(() =>
    calculateStats(processedText, searchTerm, ignoreCase),
  );

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
  const searchFrequency = countSearchFrequency(text, searchTerm, ignoreCase);
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

export default useTextAnalyzer;
