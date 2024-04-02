import { useState } from 'react';

import { useTextAnalyzer } from 'useTextAnalyzer';

import './App.css';

function App() {
  const [text, setText] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [ignoreCase, setIgnoreCase] = useState(true);
  const [trimText, setTrimText] = useState(true);

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
  } = useTextAnalyzer({ text, searchTerm, ignoreCase, trimText });

  return (
    <div>
      <h2 className="title">Text Analysis Result</h2>
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
          placeholder="Enter search term..."
          className="form-control"
        />
        <label className="checkbox">
          Ignore Case:
          <input type="checkbox" checked={ignoreCase} onChange={(e) => setIgnoreCase(e.target.checked)} />
        </label>
        <label className="checkbox">
          Trim Text:
          <input type="checkbox" checked={trimText} onChange={(e) => setTrimText(e.target.checked)} />
        </label>
      </div>
      <div className="card">
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
          <b>Search frequency of '{searchTerm}':</b> {searchFrequency}
        </p>
        <p>
          <b>Estimated reading time:</b> {readingTime} seconds
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
