import { useState } from 'react';

import { useTextAnalyzer } from 'use-text-analyzer';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [ignoreCase, setIgnoreCase] = useState(true);
  const [trimText, setTrimText] = useState(true);
  const [wordsPerMinute, setWordsPerMinute] = useState();

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
  } = useTextAnalyzer({ text, searchTerm, ignoreCase, trimText, wordsPerMinute });
  console.log(typeof wordsPerMinute)

  return (
    <div>
      <h2 className="title">Text Analyzer Demo</h2>
      <div className="card">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter text..."
          className="form-control textarea"
        />
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter search term...(optional)"
          className="form-control"
        />
        <input
          type="number"
          value={wordsPerMinute}
          onChange={(e) => setWordsPerMinute(e.target.value)}
          placeholder="Words per minute...(optional, default: 250)"
          className="form-control"
        />
        <div className="flags">
          <label className="checkbox">
            Ignore Case:
            <input type="checkbox" checked={ignoreCase} onChange={(e) => setIgnoreCase(e.target.checked)} />
          </label>
          <label className="checkbox">
            Trim Text:
            <input type="checkbox" checked={trimText} onChange={(e) => setTrimText(e.target.checked)} />
          </label>
        </div>
      </div>
      <div className="card">
        <p><b>Human-readable reading time:</b> {readingTime.text}</p>
        <p>
          <b>Estimated reading time:</b> {readingTime.minutes}m {readingTime.seconds}s
        </p>
        <p><b>Total reading time in seconds:</b> {readingTime.total}</p>
        <p>
          <b>Search frequency of '{searchTerm}':</b> {searchFrequency}
        </p>
        <p>
          <b>Word count:</b> {wordCount}
        </p>
        <p>
          <b>Character count:</b> {charCount}
        </p>
        <p>
          <b>Sentence count:</b> {sentenceCount}
        </p>
        <p>
          <b>Paragraph count:</b> {paragraphCount}
        </p>
        <p>
          <b>Most frequent word:</b> {mostFrequentWord}
        </p>
        <p>
          <b>Least frequent word:</b> {leastFrequentWord}
        </p>
        <p>
          <b>Most frequent character:</b> {mostFrequentCharacter}
        </p>
        <p>
          <b>Least frequent character:</b> {leastFrequentCharacter}
        </p>
      </div>
    </div>
  );
}

export default App;
