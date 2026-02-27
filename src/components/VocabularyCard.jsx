import { useState } from 'react';

function VocabularyCard({ word }) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div
      className="vocab-card"
      onClick={() => setShowDetails(!showDetails)}
    >
      <div className="vocab-main">
        <h3 className="korean">{word.korean}</h3>
        <p className="pronunciation">[{word.pronunciation}]</p>
      </div>

      <div className="vocab-meanings">
        <p><span className="label">EN:</span> {word.english}</p>
        <p><span className="label">NE:</span> {word.nepali}</p>
      </div>

      {showDetails && (
        <div className="vocab-example">
          <h4>Example / उदाहरण</h4>
          <p className="example-korean">{word.example.korean}</p>
          <p className="example-english">{word.example.english}</p>
          <p className="example-nepali">{word.example.nepali}</p>
        </div>
      )}

      <p className="tap-hint">{showDetails ? 'Tap to hide' : 'Tap for example'}</p>
    </div>
  );
}

export default VocabularyCard;
