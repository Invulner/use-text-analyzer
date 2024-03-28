import { countWords } from './countWords';
import { countCharacters } from './countCharacters';
import { countSentences } from './countSentences';
import { countParagraphs } from './countParagraphs';
import { countSearchFrequency } from './countSearchFrequency';
import { estimateReadingTime } from './estimateReadingTime';
import { calculateCharFrequencies } from './calculateCharFrequencies';
import { calculateWordFrequencies } from './calculateWordFrequencies';
import { findMostAndLeastFrequent } from './findMostAndLeastFrequent';

import { TextAnalysisResult } from '../interfaces';

/**
 * Calculates text analysis statistics.
 * @param text - The text to analyze.
 * @param searchTerm - The term to search for.
 * @param ignoreCase - Whether to ignore case when searching for the term and calculating word and character frequencies.
 * @returns The text analysis statistics.
 */
export function calculateStats(text: string, searchTerm: string, ignoreCase: boolean): TextAnalysisResult {
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
