import { useState, useMemo } from 'react';
import VocabularyCard from './components/VocabularyCard';
import GrammarSection from './components/GrammarSection';
import DialogueSection from './components/DialogueSection';
import ReadingSection from './components/ReadingSection';
import PracticeSection from './components/PracticeSection';
import { chapters, availableChapters, chapterTitles } from './data/chapters';
import './App.css';

function App() {
  const [currentChapter, setCurrentChapter] = useState(availableChapters[0] || 4);
  const [activeTab, setActiveTab] = useState('vocabulary');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Get current chapter data
  const chapterData = useMemo(() => {
    return chapters[currentChapter] || chapters[4];
  }, [currentChapter]);

  const {
    chapterInfo,
    vocabulary = [],
    grammar = [],
    dialogues = [],
    readingPassages = [],
    practiceExercises = []
  } = chapterData;

  const categories = [...new Set(vocabulary.map(v => v.category))];

  const filteredVocabulary = selectedCategory === 'all'
    ? vocabulary
    : vocabulary.filter(v => v.category === selectedCategory);

  // Reset category when chapter changes
  const handleChapterChange = (chapterNum) => {
    setCurrentChapter(chapterNum);
    setSelectedCategory('all');
    setActiveTab('vocabulary');
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>KIIP Level 3</h1>

        {/* Chapter Selector */}
        <div className="chapter-selector">
          <label>Chapter:</label>
          <select
            value={currentChapter}
            onChange={(e) => handleChapterChange(Number(e.target.value))}
          >
            {Object.keys(chapterTitles).map(num => {
              const isAvailable = availableChapters.includes(Number(num));
              return (
                <option
                  key={num}
                  value={num}
                  disabled={!isAvailable}
                >
                  {num}. {chapterTitles[num].korean} - {chapterTitles[num].english}
                  {!isAvailable ? ' (Coming Soon)' : ''}
                </option>
              );
            })}
          </select>
        </div>

        <div className="chapter-info">
          <h2>Chapter {chapterInfo.chapter}: {chapterInfo.title.korean}</h2>
          <p>{chapterInfo.title.english}</p>
          <p>{chapterInfo.title.nepali}</p>
        </div>

        {/* Chapter Navigation Arrows */}
        <div className="chapter-nav">
          <button
            onClick={() => handleChapterChange(currentChapter - 1)}
            disabled={!availableChapters.includes(currentChapter - 1)}
          >
            Previous Chapter
          </button>
          <button
            onClick={() => handleChapterChange(currentChapter + 1)}
            disabled={!availableChapters.includes(currentChapter + 1)}
          >
            Next Chapter
          </button>
        </div>
      </header>

      <nav className="main-nav">
        <button
          className={activeTab === 'vocabulary' ? 'active' : ''}
          onClick={() => setActiveTab('vocabulary')}
        >
          Vocabulary
        </button>
        <button
          className={activeTab === 'grammar' ? 'active' : ''}
          onClick={() => setActiveTab('grammar')}
        >
          Grammar
        </button>
        <button
          className={activeTab === 'dialogue' ? 'active' : ''}
          onClick={() => setActiveTab('dialogue')}
        >
          Dialogue
        </button>
        <button
          className={activeTab === 'reading' ? 'active' : ''}
          onClick={() => setActiveTab('reading')}
        >
          Reading
        </button>
        <button
          className={activeTab === 'practice' ? 'active' : ''}
          onClick={() => setActiveTab('practice')}
        >
          Practice
        </button>
      </nav>

      <main className="main-content">
        {activeTab === 'vocabulary' && (
          <section className="vocabulary-section">
            <div className="category-filter">
              <button
                className={selectedCategory === 'all' ? 'active' : ''}
                onClick={() => setSelectedCategory('all')}
              >
                All ({vocabulary.length})
              </button>
              {categories.map(cat => (
                <button
                  key={cat}
                  className={selectedCategory === cat ? 'active' : ''}
                  onClick={() => setSelectedCategory(cat)}
                >
                  {cat} ({vocabulary.filter(v => v.category === cat).length})
                </button>
              ))}
            </div>

            <div className="vocabulary-grid">
              {filteredVocabulary.map(word => (
                <VocabularyCard key={word.id} word={word} />
              ))}
            </div>
          </section>
        )}

        {activeTab === 'grammar' && (
          <section className="grammar-container">
            {grammar.length > 0 ? (
              grammar.map(g => (
                <GrammarSection key={g.id} grammar={g} />
              ))
            ) : (
              <p className="no-content">No grammar content available for this chapter yet.</p>
            )}
          </section>
        )}

        {activeTab === 'dialogue' && (
          <section className="dialogue-container">
            {dialogues.length > 0 ? (
              dialogues.map(d => (
                <DialogueSection key={d.id} dialogue={d} />
              ))
            ) : (
              <p className="no-content">No dialogue content available for this chapter yet.</p>
            )}
          </section>
        )}

        {activeTab === 'reading' && (
          <section className="reading-container">
            {readingPassages.length > 0 ? (
              readingPassages.map(p => (
                <ReadingSection key={p.id} passage={p} />
              ))
            ) : (
              <p className="no-content">No reading content available for this chapter yet.</p>
            )}
          </section>
        )}

        {activeTab === 'practice' && (
          <section className="practice-container">
            {practiceExercises.length > 0 ? (
              <PracticeSection exercises={practiceExercises} />
            ) : (
              <p className="no-content">No practice exercises available for this chapter yet.</p>
            )}
          </section>
        )}
      </main>

      <footer className="app-footer">
        <p>KIIP Level 3 - Chapter {currentChapter}</p>
        <p>Korean | English | Nepali</p>
      </footer>
    </div>
  );
}

export default App;
