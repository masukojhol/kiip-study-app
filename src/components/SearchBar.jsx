import { useState, useMemo, useEffect, useRef } from 'react';

function SearchBar({ onResultClick, allChapters }) {
  const [query, setQuery] = useState('');
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

  // Search across all chapters using useMemo instead of useEffect + setState
  const results = useMemo(() => {
    if (!query || query.trim().length < 2) {
      return [];
    }

    const searchQuery = query.toLowerCase().trim();
    const foundResults = [];

    if (!allChapters || typeof allChapters !== 'object') {
      return [];
    }

    Object.entries(allChapters).forEach(([chapterNum, chapterData]) => {
      if (!chapterData) return;

      const vocabList = chapterData.vocabulary;
      if (vocabList && Array.isArray(vocabList)) {
        vocabList.forEach(word => {
          if (!word) return;

          const korean = word.korean || '';
          const english = word.english || '';
          const nepali = word.nepali || '';
          const pronunciation = word.pronunciation || '';

          const matchKorean = korean.toLowerCase().includes(searchQuery);
          const matchEnglish = english.toLowerCase().includes(searchQuery);
          const matchNepali = nepali.toLowerCase().includes(searchQuery);
          const matchPronunciation = pronunciation.toLowerCase().includes(searchQuery);

          if (matchKorean || matchEnglish || matchNepali || matchPronunciation) {
            foundResults.push({
              type: 'vocabulary',
              chapter: parseInt(chapterNum),
              id: word.id,
              korean: korean,
              english: english,
              nepali: nepali,
              category: word.category,
              matchType: matchKorean ? 'korean' : matchEnglish ? 'english' : matchNepali ? 'nepali' : 'pronunciation'
            });
          }
        });
      }

      const grammarList = chapterData.grammar;
      if (grammarList && Array.isArray(grammarList)) {
        grammarList.forEach(g => {
          if (!g || !g.meaning) return;

          const pattern = g.pattern || '';
          const meaningEn = g.meaning.english || '';
          const meaningNe = g.meaning.nepali || '';

          const matchPattern = pattern.toLowerCase().includes(searchQuery);
          const matchMeaningEn = meaningEn.toLowerCase().includes(searchQuery);
          const matchMeaningNe = meaningNe.toLowerCase().includes(searchQuery);

          if (matchPattern || matchMeaningEn || matchMeaningNe) {
            foundResults.push({
              type: 'grammar',
              chapter: parseInt(chapterNum),
              id: g.id,
              pattern: pattern,
              meaning: meaningEn,
              matchType: matchPattern ? 'pattern' : 'meaning'
            });
          }
        });
      }
    });

    return foundResults.slice(0, 15);
  }, [query, allChapters]);

  const handleResultClick = (result) => {
    onResultClick(result);
    setQuery('');
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
          <button className="search-clear" onClick={() => { setQuery(''); }}>
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
