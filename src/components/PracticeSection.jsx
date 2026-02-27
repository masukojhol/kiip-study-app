import { useState } from 'react';

function PracticeSection({ exercises }) {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showAnswers, setShowAnswers] = useState({});

  const exercise = exercises[currentExercise];

  const handleInputChange = (questionIndex, value) => {
    setUserAnswers(prev => ({
      ...prev,
      [`${currentExercise}-${questionIndex}`]: value
    }));
  };

  const checkAnswer = (questionIndex) => {
    setShowAnswers(prev => ({
      ...prev,
      [`${currentExercise}-${questionIndex}`]: true
    }));
  };

  const isCorrect = (questionIndex, correctAnswer) => {
    const userAnswer = userAnswers[`${currentExercise}-${questionIndex}`] || '';
    return userAnswer.trim().toLowerCase() === correctAnswer.toLowerCase();
  };

  return (
    <div className="practice-section">
      <div className="exercise-tabs">
        {exercises.map((ex, index) => (
          <button
            key={index}
            className={currentExercise === index ? 'active' : ''}
            onClick={() => setCurrentExercise(index)}
          >
            {ex.type === 'fill-in-blank' ? 'Fill Blanks' : 'Translation'}
          </button>
        ))}
      </div>

      <div className="exercise-content">
        <div className="exercise-instruction">
          <p><strong>KO:</strong> {exercise.instruction.korean}</p>
          <p><strong>EN:</strong> {exercise.instruction.english}</p>
          <p><strong>NE:</strong> {exercise.instruction.nepali}</p>
        </div>

        <div className="questions-list">
          {exercise.questions.map((q, index) => (
            <div key={index} className="question-item">
              <p className="question-text">
                {index + 1}. {q.question}
                {q.hint && <span className="hint"> (Hint: {q.hint})</span>}
              </p>

              {q.nepaliQuestion && (
                <p className="question-nepali">{q.nepaliQuestion}</p>
              )}

              <div className="answer-input">
                <input
                  type="text"
                  value={userAnswers[`${currentExercise}-${index}`] || ''}
                  onChange={(e) => handleInputChange(index, e.target.value)}
                  placeholder="Your answer..."
                />
                <button onClick={() => checkAnswer(index)}>Check</button>
              </div>

              {showAnswers[`${currentExercise}-${index}`] && (
                <div className={`answer-result ${isCorrect(index, q.answer) ? 'correct' : 'incorrect'}`}>
                  {isCorrect(index, q.answer) ? (
                    <p>✓ Correct! / सही!</p>
                  ) : (
                    <p>✗ Answer: <strong>{q.answer}</strong></p>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PracticeSection;
