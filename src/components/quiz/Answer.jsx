import React, { useState } from 'react';
import AnswerRadio from './AnswerRadio';

function Answer({ options, answer, handleNextQuestion, onQuestionSubmit }) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isError, setIsError] = useState(false);

  const formClassName = isSubmitted ? 'answer-form submitted' : 'answer-form';

  const handleChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!selectedAnswer) {
      setIsError(true);
      return;
    } else {
      if (!isSubmitted) {
        setIsSubmitted(true);
        onQuestionSubmit();
      } else {
        setIsSubmitted(false);
        handleNextQuestion();
        setSelectedAnswer('');
      }

      setIsError(false);
    }
  };

  return (
    <>
      <form action="#" className={formClassName} onSubmit={handleSubmit}>
        {options.map((option, index) => (
          <AnswerRadio
            key={option}
            value={option}
            isCorrect={option === answer}
            isChecked={selectedAnswer === option}
            name="answer-option"
            index={index} // For A-B-C-D mapping
            onChange={handleChange}
          />
        ))}
        {isSubmitted ? (
          <button type="submit" className="answer-btn">
            Next Question
          </button>
        ) : (
          <button type="submit" className="answer-btn">
            Submit
          </button>
        )}
      </form>
      {isError && (
        <div className="answer-error">
          <img
            className="answer-error-icon"
            src="/assets/images/icon-error.svg"
            alt="Error icon"
          />
          <p className="answer-error-text">Please select an answer</p>
        </div>
      )}
    </>
  );
}

export default Answer;
