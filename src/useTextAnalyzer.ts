import { useMemo } from 'react';

import { TextAnalysisResult, TextAnalyzerOptions } from './interfaces';
import { calculateStats } from './utils/calculateStats';
import { WORDS_PER_MINUTE } from './constants';

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
  wordsPerMinute = WORDS_PER_MINUTE,
}: TextAnalyzerOptions): TextAnalysisResult {
  const processedText = trimText ? text.trim() : text;

  const analysisResult = useMemo(() => {
    return calculateStats({
      text: processedText,
      searchTerm,
      ignoreCase,
      wordsPerMinute,
    });
  }, [processedText, searchTerm, ignoreCase, wordsPerMinute]);

  return analysisResult;
}

export default useTextAnalyzer;
