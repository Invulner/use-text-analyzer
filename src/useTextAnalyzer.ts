import { useMemo } from 'react';

import { TextAnalysisResult, TextAnalyzerOptions } from './interfaces';
import { determineReadingSpeed } from './utils/determineReadingSpeed';
import { calculateStats } from './utils/calculateStats';

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
  wordsPerMinute,
}: TextAnalyzerOptions): TextAnalysisResult {
  const processedText = useMemo(() => {
    return trimText ? text.trim() : text;
  }, [text, trimText]);

  const effectiveWPM = useMemo(() => {
    return determineReadingSpeed(processedText, wordsPerMinute);
  }, [processedText, wordsPerMinute]);

  const analysisResult = useMemo(() => {
    return calculateStats({
      text: processedText,
      searchTerm,
      ignoreCase,
      wordsPerMinute: effectiveWPM,
    });
  }, [processedText, searchTerm, ignoreCase, effectiveWPM]);

  return analysisResult;
}

export default useTextAnalyzer;
