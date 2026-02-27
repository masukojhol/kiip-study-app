import { useState } from 'react';

function DialogueSection({ dialogue }) {
  const [showTranslations, setShowTranslations] = useState(true);

  return (
    <div className="dialogue-section">
      <div className="dialogue-header">
        <h2>{dialogue.title.korean}</h2>
        <p className="dialogue-title-en">{dialogue.title.english}</p>
        <p className="dialogue-title-ne">{dialogue.title.nepali}</p>
      </div>

      <div className="dialogue-situation">
        <p><strong>Situation:</strong> {dialogue.situation.english}</p>
        <p><strong>परिस्थिति:</strong> {dialogue.situation.nepali}</p>
      </div>

      <button
        className="toggle-btn"
        onClick={() => setShowTranslations(!showTranslations)}
      >
        {showTranslations ? 'Hide Translations' : 'Show Translations'}
      </button>

      <div className="dialogue-conversation">
        {dialogue.conversation.map((line, index) => (
          <div key={index} className={`dialogue-line ${line.speaker.includes('Staff') || line.speaker.includes('직원') ? 'staff' : 'customer'}`}>
            <p className="speaker">{line.speaker}</p>
            <p className="korean-text">{line.korean}</p>
            {showTranslations && (
              <>
                <p className="english-text">{line.english}</p>
                <p className="nepali-text">{line.nepali}</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DialogueSection;
