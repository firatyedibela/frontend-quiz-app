import { useState } from 'react';
import AnswerOption from './AnswerOptionButton';
import Error from './Error';

type AnswerProps = {
  options: string[];
  correctAnswer: string;
  updateScore: () => void;
  handleNext: () => void;
};

function Answer({
  options,
  correctAnswer,
  updateScore,
  handleNext,
}: AnswerProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);
  const [selectedOption, setSelectedOption] = useState<String | null>(null);

  const handleSubmit = () => {
    if (selectedOption) {
      setIsError(false);
      setIsSubmitted(true);

      if (selectedOption === correctAnswer) {
        updateScore();
      }
    } else {
      setIsError(true);
    }
  };

  const handleNextQuestion = () => {
    setIsSubmitted(false);
    setSelectedOption(null);
    handleNext();
  };

  const handleOptionSelect = (option: string) => {
    setSelectedOption(option);
  };

  return (
    <div
      className={
        isSubmitted ? 'quiz__answer-half submitted' : 'quiz__answer-half'
      }
    >
      <div className="quiz__answer-options">
        {options.map((option, idx) => (
          <AnswerOption
            onSelect={handleOptionSelect}
            optionIndex={idx + 1}
            isCorrect={option === correctAnswer}
            key={option}
            option={option}
          />
        ))}
      </div>
      {isSubmitted ? (
        <button
          className="quiz__next-question-btn"
          onClick={handleNextQuestion}
        >
          Next Question
        </button>
      ) : (
        <>
          <button className="quiz__submit-answer-btn" onClick={handleSubmit}>
            Submit Answer
          </button>
          {isError && <Error />}
        </>
      )}
    </div>
  );
}

export default Answer;
