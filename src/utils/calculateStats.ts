import { countWords } from './countWords';
import { countCharacters } from './countCharacters';
import { countSentences } from './countSentences';
import { countParagraphs } from './countParagraphs';
import { countSearchFrequency } from './countSearchFrequency';
import { estimateReadingTime } from './estimateReadingTime';
import { calculateCharFrequencies } from './calculateCharFrequencies';
import { calculateWordFrequencies } from './calculateWordFrequencies';
import { findMostAndLeastFrequent } from './findMostAndLeastFrequent';

import { TextAnalysisResult, TextAnalyzerOptions } from '../interfaces';

/**
 * Analyzes the given text and returns various statistics about it.
 * @param {TextAnalyzerOptions} options - Options for text analysis.
 * @returns {TextAnalysisResult} An object containing various statistics about the text.
 */
export function calculateStats({
  text,
  searchTerm,
  ignoreCase,
  wordsPerMinute,
}: TextAnalyzerOptions): TextAnalysisResult {
  const wordCount = countWords(text);
  const charCount = countCharacters(text);
  const sentenceCount = countSentences(text);
  const paragraphCount = countParagraphs(text);
  const searchFrequency = countSearchFrequency(text, searchTerm, ignoreCase);
  const readingTime = estimateReadingTime(wordCount, wordsPerMinute);
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
