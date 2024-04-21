## 2.1.0

### Enhancements

- **CJK Support Enhancements:** Improved support for CJK text in various utilities:
  - Added automatic detection of CJK text to adjust reading time calculations based on the typical reading speed for CJK languages.
  - Updated `countWords` utility to correctly treat each CJK character as a separate word, enhancing accuracy in word counting for Chinese, Japanese, and Korean texts.
  - Enhanced `countSentences` to recognize CJK-specific punctuation, improving sentence detection accuracy in CJK languages.

### Dependency Updates

- Updated `typescript` from `5.2.2` to `5.4.5`.
- Updated `@types/react` from `18.2.73` to `18.2.79`.
- Updated `@types/react-dom` from `18.2.23` to `18.2.25`.
- Updated `@typescript-eslint/eslint-plugin` from `7.4.0` to `7.7.0`.
- Updated `@typescript-eslint/parser` from `7.4.0` to `7.7.0`.

## 2.0.1

### Fixes

- process cases when `wordsPerMinute` is a string

## 2.0.0

### Breaking Changes

- **Reading Time Format:** The format of the `readingTime` output in the `useTextAnalyzer` hook has been modified. Previously, `readingTime` was returned as a single integer representing the total number of seconds. Now, it is an object containing detailed aspects of the estimated reading time:
  - `minutes`: Total estimated reading time expressed in whole minutes.
  - `seconds`: Remaining seconds beyond the counted minutes.
  - `total`: Total estimated reading time expressed in seconds.
  - `text`: Human-readable summary of the reading time.

### Added

- **Custom Reading Speed:** Added a new optional parameter `wordsPerMinute` to the `useTextAnalyzer` hook. This parameter allows users to specify their reading speed, which the hook uses to calculate the estimated reading time. The default value is set to 250 words per minute.

## 1.1.15

- fix word splitter to count contractions like "don't" as one word.

## 1.1.14

- store default value for reading speed in constants

## 1.1.13

- update keywords

## 1.1.12

- update `README.md` styling

## 1.1.11

- use `useMemo` to calculate all stats

## 1.1.10

- fix `calculateCharFrequencies` logic

## 1.1.9

- update `calculateCharFrequencies` to correctly calc emoji

## 1.1.8

- update word splitting mechanism in `countWordFrequencies`

## 1.1.7

- update `countParagraphs` to ignore trailing and leading whitespaces

## 1.1.6

- update `countWords` to exclude non alphanumeric characters

## 1.1.5

- fix `calculateWordFrequencies` logic to omit multiple whitespaces

## 1.1.4

- fix `countSentences` logic to omit multiple whitespaces

## 1.1.3

- update code structure, move utils to separate files

## 1.1.2

- fix `calculateWordFrequencies` for empty text

## 1.1.1

- fix bug in `countParagraphs`
- update `countSearchFrequency` logic

## 1.1.0

- add `trimText` param

## 1.0.0

- add basic functionality:
  - calculate number of words
  - calculate number of characters
  - calculate number of sentences
  - calculate number of paragraphs
  - calculate frequency of the search term
  - calculate estimated reading time
  - find most frequent word
  - find least frequent word
  - find most frequent character
  - find least frequent character
