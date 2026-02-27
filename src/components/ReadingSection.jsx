import { useState } from 'react';

function ReadingSection({ passage }) {
  const [language, setLanguage] = useState('korean');

  return (
    <div className="reading-section">
      <div className="reading-header">
        <h2>{passage.title.korean}</h2>
        <p className="reading-title-en">{passage.title.english}</p>
        <p className="reading-title-ne">{passage.title.nepali}</p>
      </div>

      <div className="language-tabs">
        <button
          className={language === 'korean' ? 'active' : ''}
          onClick={() => setLanguage('korean')}
        >
          한국어
        </button>
        <button
          className={language === 'english' ? 'active' : ''}
          onClick={() => setLanguage('english')}
        >
          English
        </button>
        <button
          className={language === 'nepali' ? 'active' : ''}
          onClick={() => setLanguage('nepali')}
        >
          नेपाली
        </button>
        <button
          className={language === 'all' ? 'active' : ''}
          onClick={() => setLanguage('all')}
        >
          All
        </button>
      </div>

      <div className="reading-content">
        {(language === 'korean' || language === 'all') && (
          <div className="content-korean">
            <h4>한국어</h4>
            <p>{passage.content.korean}</p>
          </div>
        )}

        {(language === 'english' || language === 'all') && (
          <div className="content-english">
            <h4>English</h4>
            <p>{passage.content.english}</p>
          </div>
        )}

        {(language === 'nepali' || language === 'all') && (
          <div className="content-nepali">
            <h4>नेपाली</h4>
            <p>{passage.content.nepali}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReadingSection;
