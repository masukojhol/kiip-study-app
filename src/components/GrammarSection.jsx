import { useState } from 'react';

function GrammarSection({ grammar }) {
  const [activeExample, setActiveExample] = useState(0);
  const [showConjugation, setShowConjugation] = useState(false);

  return (
    <div className="grammar-section">
      <div className="grammar-header">
        <h2 className="grammar-pattern">{grammar.pattern}</h2>
        <div className="grammar-meanings">
          <p><span className="label">EN:</span> {grammar.meaning.english}</p>
          <p><span className="label">NE:</span> {grammar.meaning.nepali}</p>
        </div>
      </div>

      {/* Description */}
      {grammar.description && (
        <div className="grammar-description">
          <h3>📝 Description / विवरण</h3>
          <p className="desc-en">{grammar.description.english}</p>
          <p className="desc-ne">{grammar.description.nepali}</p>
        </div>
      )}

      {/* When to Use */}
      {grammar.whenToUse && (
        <div className="grammar-when-to-use">
          <h3>🕐 When to Use / कहिले प्रयोग गर्ने</h3>
          <div className="situations-list">
            {grammar.whenToUse.situations.map((item, idx) => (
              <div key={idx} className="situation-item">
                <div className="situation-header">
                  <span className="situation-number">{idx + 1}</span>
                  <div className="situation-text">
                    <p className="situation-en">{item.situation.english}</p>
                    <p className="situation-ne">{item.situation.nepali}</p>
                  </div>
                </div>
                <div className="situation-example">
                  <p className="example-korean">{item.example.korean}</p>
                  <p className="example-english">{item.example.english}</p>
                  <p className="example-nepali">{item.example.nepali}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Where to Use */}
      {grammar.whereToUse && (
        <div className="grammar-where-to-use">
          <h3>📍 Where to Use / कहाँ प्रयोग गर्ने</h3>
          <p className="where-en">{grammar.whereToUse.english}</p>
          <p className="where-ne">{grammar.whereToUse.nepali}</p>
        </div>
      )}

      {/* Formality */}
      {grammar.formality && (
        <div className="grammar-formality">
          <h3>👔 Formality / औपचारिकता</h3>
          <p className="formality-en">{grammar.formality.english}</p>
          <p className="formality-ne">{grammar.formality.nepali}</p>
        </div>
      )}

      {/* Formation */}
      <div className="grammar-formation">
        <h3>🔧 Formation / बनावट</h3>
        <p className="formation-rule">{grammar.formation.rule}</p>
        <p className="formation-note-en">{grammar.formation.notes.english}</p>
        <p className="formation-note-ne">{grammar.formation.notes.nepali}</p>

        {/* Conjugation Table */}
        {grammar.formation.conjugationTable && (
          <div className="conjugation-section">
            <button
              className="toggle-conjugation"
              onClick={() => setShowConjugation(!showConjugation)}
            >
              {showConjugation ? '▼ Hide' : '▶ Show'} Conjugation Examples / क्रिया रूपान्तर
            </button>

            {showConjugation && (
              <table className="conjugation-table">
                <thead>
                  <tr>
                    <th>Verb</th>
                    <th>Stem</th>
                    <th>Result</th>
                    <th>EN / NE</th>
                  </tr>
                </thead>
                <tbody>
                  {grammar.formation.conjugationTable.map((row, idx) => (
                    <tr key={idx}>
                      <td>{row.verb}</td>
                      <td className="stem-cell">{row.stem}</td>
                      <td className="result-cell">{row.result}</td>
                      <td>
                        <span className="meaning-en">{row.english}</span>
                        <br />
                        <span className="meaning-ne">{row.nepali}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>

      {/* Comparison with Similar Patterns */}
      {grammar.comparisonWithSimilar && (
        <div className="grammar-comparison">
          <h3>⚖️ Similar Patterns / समान ढाँचाहरू</h3>
          {grammar.comparisonWithSimilar.english && (
            <div className="simple-comparison">
              <p className="comparison-en">{grammar.comparisonWithSimilar.english}</p>
              <p className="comparison-ne">{grammar.comparisonWithSimilar.nepali}</p>
            </div>
          )}
          {grammar.comparisonWithSimilar.patterns && (
            <div className="detailed-comparison">
              {grammar.comparisonWithSimilar.patterns.map((comp, idx) => (
                <div key={idx} className="comparison-item">
                  <h4>{comp.pattern}</h4>
                  <p className="diff-en">{comp.difference.english}</p>
                  <p className="diff-ne">{comp.difference.nepali}</p>
                  {comp.exampleComparison && (
                    <div className="comparison-examples">
                      <p><span className="label">Formal:</span> {comp.exampleComparison.formal}</p>
                      <p><span className="label">Casual:</span> {comp.exampleComparison.casual}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Examples */}
      <div className="grammar-examples">
        <h3>💬 Examples / उदाहरणहरू ({grammar.examples.length})</h3>

        <div className="example-navigation">
          {grammar.examples.map((_, index) => (
            <button
              key={index}
              className={`example-btn ${activeExample === index ? 'active' : ''}`}
              onClick={() => setActiveExample(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>

        <div className="example-content">
          {grammar.examples[activeExample].context && (
            <div className="example-context">
              <span className="context-label">Context:</span>
              <span className="context-en">{grammar.examples[activeExample].context.english}</span>
              <span className="context-ne">({grammar.examples[activeExample].context.nepali})</span>
            </div>
          )}
          <p className="example-korean">{grammar.examples[activeExample].korean}</p>
          <p className="example-english">{grammar.examples[activeExample].english}</p>
          <p className="example-nepali">{grammar.examples[activeExample].nepali}</p>
        </div>

        <div className="example-arrows">
          <button
            onClick={() => setActiveExample(prev => Math.max(0, prev - 1))}
            disabled={activeExample === 0}
          >
            ← Previous
          </button>
          <button
            onClick={() => setActiveExample(prev => Math.min(grammar.examples.length - 1, prev + 1))}
            disabled={activeExample === grammar.examples.length - 1}
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default GrammarSection;
