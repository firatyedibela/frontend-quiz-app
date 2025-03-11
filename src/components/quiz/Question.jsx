import React, { useContext } from 'react';
import ProgressBar from './ProgressBar';
import { Theme } from '../../context/ThemeProvider';

function Question({ question, index, total, submittedCount }) {
  const { isDarkMode } = useContext(Theme);

  return (
    <>
      <span className="question-counter">
        Question {index} of {total}
      </span>
      <p className="question-text">{question}</p>
      <ProgressBar current={submittedCount} max={total} />
    </>
  );
}

export default Question;
