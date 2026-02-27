import { useState, useEffect, useRef } from 'react';

function SearchBar({ vocabulary, grammar, onResultClick, allChapters }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Search across all chapters
  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase().trim();
    const foundResults = [];

    // Search in all chapters
    Object.entries(allChapters).forEach(([chapterNum, chapterData]) => {
      // Search vocabulary
      if (chapterData.vocabulary) {
        chapterData.vocabulary.forEach(word => {
          const matchKorean = word.korean.toLowerCase().includes(searchQuery);
          const matchEnglish = word.english.toLowerCase().includes(searchQuery);
          const matchNepali = word.nepali && word.nepali.toLowerCase().includes(searchQuery);
          const matchPronunciation = word.pronunciation && word.pronunciation.toLowerCase().includes(searchQuery);

          if (matchKorean || matchEnglish || matchNepali || matchPronunciation) {
            foundResults.push({
              type: 'vocabulary',
              chapter: parseInt(chapterNum),
              id: word.id,
              korean: word.korean,
              english: word.english,
              nepali: word.nepali,
              category: word.category,
              matchType: matchKorean ? 'korean' : matchEnglish ? 'english' : matchNepali ? 'nepali' : 'pronunciation'
            });
          }
        });
      }

      // Search grammar patterns
      if (chapterData.grammar) {
        chapterData.grammar.forEach(g => {
          const matchPattern = g.pattern.toLowerCase().includes(searchQuery);
          const matchMeaningEn = g.meaning.english.toLowerCase().includes(searchQuery);
          const matchMeaningNe = g.meaning.nepali && g.meaning.nepali.toLowerCase().includes(searchQuery);

          if (matchPattern || matchMeaningEn || matchMeaningNe) {
            foundResults.push({
              type: 'grammar',
              chapter: parseInt(chapterNum),
              id: g.id,
              pattern: g.pattern,
              meaning: g.meaning.english,
              matchType: matchPattern ? 'pattern' : 'meaning'
            });
          }
        });
      }
    });

    // Limit results
    setResults(foundResults.slice(0, 15));
  }, [query, allChapters]);

  const handleResultClick = (result) => {
    onResultClick(result);
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="search-container" ref={searchRef}>
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="Search Korean, English, Nepali..."
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
        />
        {query && (
          <button className="search-clear" onClick={() => { setQuery(''); setResults([]); }}>
            ✕
          </button>
        )}
      </div>

      {isOpen && results.length > 0 && (
        <div className="search-results">
          {results.map((result, index) => (
            <div
              key={`${result.type}-${result.chapter}-${result.id}-${index}`}
              className="search-result-item"
              onClick={() => handleResultClick(result)}
            >
              {result.type === 'vocabulary' ? (
                <>
                  <div className="result-main">
                    <span className="result-korean">{result.korean}</span>
                    <span className="result-chapter">Ch.{result.chapter}</span>
                  </div>
                  <div className="result-sub">
                    <span className="result-english">{result.english}</span>
                    {result.nepali && <span className="result-nepali"> • {result.nepali}</span>}
                  </div>
                  <span className="result-type vocab-tag">Vocab</span>
                </>
              ) : (
                <>
                  <div className="result-main">
                    <span className="result-pattern">{result.pattern}</span>
                    <span className="result-chapter">Ch.{result.chapter}</span>
                  </div>
                  <div className="result-sub">
                    <span className="result-meaning">{result.meaning}</span>
                  </div>
                  <span className="result-type grammar-tag">Grammar</span>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="search-results">
          <div className="no-results">No results found for "{query}"</div>
        </div>
      )}
    </div>
  );
}

export default SearchBar;
