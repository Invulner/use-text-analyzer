## 2.1.6

### Fixes

- Resolved deprecation warnings in the test suite by installing additional testing libraries:
  - Added `@testing-library/dom` version `^10.4.0`.
  - Added `@testing-library/react` version `^16.0.1`.

## 2.1.5

### Dependency Updates

- Updated `@types/react` from `18.3.3` to `18.3.10`.
- Updated `eslint-plugin-prettier` from `5.1.3` to `5.2.1`.
- Updated `husky` from `9.1.4` to `9.1.6`.
- Updated `ts-jest` from `29.2.3` to `29.2.5`.
- Updated `typescript` from `5.5.3` to `5.6.2`.

## 2.1.4

### Dependency Updates

- Updated `husky` from `9.0.11` to `9.1.4`.
- Updated `prettier` from `3.3.0` to `3.3.3`.
- Updated `@typescript-eslint/parser` from `7.12.0` to `7.18.0`.
- Updated `@typescript-eslint/eslint-plugin` from `7.12.0` to `7.18.0`.
- Updated `ts-jest` from `29.1.4` to `29.2.3`.
- Updated `typescript` from `5.4.5` to `5.5.3`.

## 2.1.3

### Dependency Updates

- Updated `react-dom` from `18.2.0` to `18.3.1`.
- Updated `@types/react-dom` from `18.2.25` to `18.3.0`.
- Updated `@typescript-eslint/parser` from `7.8.0` to `7.12.0`.
- Updated `@types/react` from `18.3.1` to `18.3.3`.
- Updated `@typescript-eslint/eslint-plugin` from `7.8.0` to `7.12.0`.
- Updated `ts-jest` from `29.1.2` to `29.1.4`.
- Updated `prettier` from `3.2.5` to `3.3.0`.

## 2.1.2

### Dependency Updates

- Bump `ejs` from version `3.1.9` to `3.1.10` in the npm_and_yarn group.
- Bump `@typescript-eslint/parser` from version `7.7.1` to `7.8.0`.
- Bump `eslint-plugin-react-hooks` from version `4.6.0` to `4.6.2`.
- Bump `@typescript-eslint/eslint-plugin` from version `7.7.1` to `7.8.0`.
- Updates `react` from version `18.2.0` to `18.3.1`.
- Updates `@types/react` from version `18.2.79` to `18.3.1`.

## 2.1.1

### Enhancements

- **Optimizations:** Enhanced the performance of the `useTextAnalyzer` hook by wrapping several calculations in `useMemo` to avoid unnecessary re-computations.

### Documentation

- Updated README to clarify features.

### Dependency Updates

- Updated `@typescript-eslint/eslint-plugin` from `7.7.0` to `7.7.1`.
- Updated `@typescript-eslint/parser` from `7.7.0` to `7.7.1`.

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
