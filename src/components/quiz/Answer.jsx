import React, { useState } from 'react';
import AnswerRadio from './AnswerRadio';
import errorIcon from '../../../assets/images/icon-error.svg';

function Answer({
  options,
  answer,
  isLastQuestion,
  onSubmit,
  updateScore,
  onNextQuestion,
  onFinish,
}) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [isError, setIsError] = useState(false);

  const formClassName = isSubmitted ? 'answer-form submitted' : 'answer-form';

  const handleInputChange = (e) => {
    setSelectedAnswer(e.target.value);
  };

  const handleSubmitQuestion = (e) => {
    e.preventDefault();

    if (!selectedAnswer) {
      setIsError(true);
      return;
    }

    if (selectedAnswer === answer) {
      updateScore();
    }

    onSubmit();
    setIsError(false);
    setIsSubmitted(true);
  };

  const handleNextQuestion = (e) => {
    e.preventDefault();

    setIsSubmitted(false);
    setSelectedAnswer('');

    onNextQuestion();
  };

  return (
    <>
      <form
        action="#"
        className={formClassName}
        onSubmit={handleSubmitQuestion}
      >
        {options.map((option, index) => (
          <AnswerRadio
            key={option}
            value={option}
            isCorrect={option === answer}
            isChecked={selectedAnswer === option}
            name="answer-option"
            index={index} // For A-B-C-D mapping
            onChange={handleInputChange}
          />
        ))}
        {isLastQuestion ? (
          <button onClick={onFinish} className="btn-primary">
            Finish
          </button>
        ) : isSubmitted ? (
          <button
            type="button"
            onClick={handleNextQuestion}
            className="btn-primary"
          >
            Next Question
          </button>
        ) : (
          <button type="submit" className="btn-primary">
            Submit
          </button>
        )}
      </form>
      {isError && (
        <div className="answer-error">
          <img className="answer-error-icon" src={errorIcon} alt="Error icon" />
          <p className="answer-error-text">Please select an answer</p>
        </div>
      )}
    </>
  );
}

export default Answer;
