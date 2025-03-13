import React from 'react';
import ProgressBar from './ProgressBar';

function Question({ question, index, total, submitCount }) {
  return (
    <>
      <div className="question-info">
        <span className="question-counter">
          Question {index} of {total}
        </span>
        <p className="question-text">{question}</p>
      </div>
      <ProgressBar current={submitCount} max={total} />
    </>
  );
}

export default Question;
