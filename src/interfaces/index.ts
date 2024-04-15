/**
 * Options for text analysis.
 */
export interface TextAnalyzerOptions {
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
  /**
   * The number of words a person can read per minute.
   * @default 250
   */
  wordsPerMinute?: number;
}

/**
 * Text analysis result.
 */
export interface TextAnalysisResult {
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
   * The estimated reading time of the text, detailed in minutes and seconds.
   */
  readingTime: {
    /**
     * Estimated minutes to read the text.
     */
    minutes: number;
    /**
     * Remaining seconds beyond counted minutes.
     */
    seconds: number;
    /**
     * Total estimated reading time in seconds.
     */
    total: number;
    /**
     * Human-readable summary of the reading time.
     */
    text: string;
  };
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
