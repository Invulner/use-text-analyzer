import { useState, useEffect } from 'react';

import { TextAnalysisResult, TextAnalyzerOptions } from './interfaces';
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

export default useTextAnalyzer;
