import React from 'react';
import SubjectIcon from '../SubjectIcon';

function Score({ score, subject, total, onPlayAgain }) {
  return (
    <div className="score">
      <p className="score__text">
        Quiz completed <strong>You scored...</strong>
      </p>

      <div className="score__summary-container">
        <div className="score__summary">
          <div className="score__subject-section">
            <SubjectIcon subject={subject} />
            <span className="score__subject-name">{subject}</span>
          </div>
          <div className="score__value-section">
            <span className="score__value">{score}</span>
            <span className="score__out-of">out of {total}</span>
          </div>
        </div>
        <button className="btn-primary" onClick={onPlayAgain}>
          Play Again
        </button>
      </div>
    </div>
  );
}

export default Score;
