<div align="center">
  <img src="logo.jpg" width="508" alt="use-text-analyzer" />
</div>

<p align="center">
  A lightweight React hook for analyzing text and providing various statistics such as word count, character count, search frequency, and more.
</p>

<div align="center">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/use-text-analyzer">
  <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/use-text-analyzer">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/invulner/use-text-analyzer">
  <img alt="GitHub License" src="https://img.shields.io/github/license/invulner/use-text-analyzer">
</div>

## Installation 🛠️

### npm

```bash
npm install use-text-analyzer
```

### yarn

```bash
yarn add use-text-analyzer
```

## Features ✨

- **Lightweight 🪶:** Less than 1KB in size, making it lightweight and efficient.
- **TypeScript Support 🇹🇸:** Works seamlessly with both JavaScript and TypeScript projects.
- **Efficient Algorithms ⚡:** Utilizes efficient algorithms for finding the most and least frequent words/characters.

## Usage 📝

```jsx
import React from 'react';
import useTextAnalyzer from 'use-text-analyzer';

function TextAnalyzerExample() {
  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.';
  const searchTerm = 'Lorem';

  const {
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
  } = useTextAnalyzer({ text, searchTerm });

  return (
    <div>
      <h2>Text Analysis Result</h2>
      <p>Word count: {wordCount}</p>
      <p>Character count: {charCount}</p>
      <p>Sentence count: {sentenceCount}</p>
      <p>Paragraph count: {paragraphCount}</p>
      <p>
        Search frequency of '{searchTerm}': {searchFrequency}
      </p>
      <p>Estimated reading time: {readingTime} seconds</p>
      <p>Most frequent word: {mostFrequentWord}</p>
      <p>Least frequent word: {leastFrequentWord}</p>
      <p>Most frequent character: {mostFrequentCharacter}</p>
      <p>Least frequent character: {leastFrequentCharacter}</p>
    </div>
  );
}

export default TextAnalyzerExample;
```

## API ⚙️

### `useTextAnalyzer(options: TextAnalyzerOptions): TextAnalysisResult`

A React hook that analyzes the given text and returns various statistics about it.

#### Parameters

- `options` (required): An object containing options for text analysis.
  - `text` (string, required): The text to analyze.
  - `searchTerm` (string, optional): The term to search for in the text.
  - `ignoreCase` (boolean, optional, default: true): Whether to ignore case when searching for the term and calculating word and character frequencies.
  - `trimText` (boolean, optional, default: true): Whether to trim the text before analysis.

#### Returns

An object containing various statistics about the text.

- `wordCount` (number): The number of words in the text.
- `charCount` (number): The number of characters in the text.
- `sentenceCount` (number): The number of sentences in the text.
- `paragraphCount` (number): The number of paragraphs in the text.
- `searchFrequency` (number): The frequency of the search term in the text.
- `readingTime` (number): The estimated reading time of the text in seconds.
- `mostFrequentWord` (string): The most frequent word in the text.
- `leastFrequentWord` (string): The least frequent word in the text.
- `mostFrequentCharacter` (string): The most frequent character in the text.
- `leastFrequentCharacter` (string): The least frequent character in the text.
