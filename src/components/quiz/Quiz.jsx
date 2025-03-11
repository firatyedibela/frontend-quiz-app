import React, { useState } from 'react';
import Question from './Question';
import Answer from './Answer';

function Quiz({ questions }) {
  const [index, setIndex] = useState(0);
  const [submittedQuestionsCount, setSubmittedQuestionsCount] = useState(0);

  const handleNextQuestion = () => {
    setIndex(index + 1);
  };

  const increaseSubmittedQuestionsCount = () => {
    setSubmittedQuestionsCount(submittedQuestionsCount + 1);
  };

  return (
    <div className="quiz">
      <div className="quiz__question-half">
        <Question
          question={questions[index].question}
          index={index + 1}
          total={questions.length}
          submittedCount={submittedQuestionsCount}
        />
      </div>
      <div className="quiz__answers-half">
        <Answer
          options={questions[index].options}
          answer={questions[index].answer}
          handleNextQuestion={handleNextQuestion}
          onQuestionSubmit={increaseSubmittedQuestionsCount}
        />
      </div>
    </div>
  );
}

export default Quiz;
