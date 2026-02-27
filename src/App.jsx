import { useState, useMemo, useRef, useEffect } from 'react';
import VocabularyCard from './components/VocabularyCard';
import GrammarSection from './components/GrammarSection';
import DialogueSection from './components/DialogueSection';
import ReadingSection from './components/ReadingSection';
import PracticeSection from './components/PracticeSection';
import SearchBar from './components/SearchBar';
import { chapters, availableChapters, chapterTitles } from './data/chapters';
import './App.css';

function App() {
  const [currentChapter, setCurrentChapter] = useState(availableChapters[0] || 4);
  const [activeTab, setActiveTab] = useState('vocabulary');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [highlightedId, setHighlightedId] = useState(null);

  // Refs for scrolling to elements
  const vocabRefs = useRef({});
  const grammarRefs = useRef({});

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
    setHighlightedId(null);
  };

  // Handle search result click
  const handleSearchResultClick = (result) => {
    // Change to the correct chapter
    if (result.chapter !== currentChapter) {
      setCurrentChapter(result.chapter);
    }

    // Set the correct tab
    if (result.type === 'vocabulary') {
      setActiveTab('vocabulary');
      setSelectedCategory('all'); // Show all to ensure the word is visible

      // Wait for state update and DOM render, then scroll
      setTimeout(() => {
        const element = vocabRefs.current[`${result.chapter}-${result.id}`];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          setHighlightedId(`vocab-${result.chapter}-${result.id}`);
          // Remove highlight after 3 seconds
          setTimeout(() => setHighlightedId(null), 3000);
        }
      }, 100);
    } else if (result.type === 'grammar') {
      setActiveTab('grammar');

      setTimeout(() => {
        const element = grammarRefs.current[`${result.chapter}-${result.id}`];
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          setHighlightedId(`grammar-${result.chapter}-${result.id}`);
          setTimeout(() => setHighlightedId(null), 3000);
        }
      }, 100);
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>KIIP Level 3</h1>

        {/* Search Bar */}
        <SearchBar
          vocabulary={vocabulary}
          grammar={grammar}
          allChapters={chapters}
          onResultClick={handleSearchResultClick}
        />

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
            Previous
          </button>
          <button
            onClick={() => handleChapterChange(currentChapter + 1)}
            disabled={!availableChapters.includes(currentChapter + 1)}
          >
            Next
          </button>
        </div>
      </header>

      <nav className="main-nav">
        <button
          className={activeTab === 'vocabulary' ? 'active' : ''}
          onClick={() => setActiveTab('vocabulary')}
        >
          Vocab
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
                <div
                  key={word.id}
                  ref={el => vocabRefs.current[`${currentChapter}-${word.id}`] = el}
                  className={highlightedId === `vocab-${currentChapter}-${word.id}` ? 'highlighted' : ''}
                >
                  <VocabularyCard word={word} />
                </div>
              ))}
            </div>
          </section>
        )}

        {activeTab === 'grammar' && (
          <section className="grammar-container">
            {grammar.length > 0 ? (
              grammar.map(g => (
                <div
                  key={g.id}
                  ref={el => grammarRefs.current[`${currentChapter}-${g.id}`] = el}
                  className={highlightedId === `grammar-${currentChapter}-${g.id}` ? 'highlighted' : ''}
                >
                  <GrammarSection grammar={g} />
                </div>
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
