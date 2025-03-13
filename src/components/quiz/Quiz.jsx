import React, { useState } from 'react';
import Question from './Question';
import Answer from './Answer';
import Score from './Score';

function Quiz({ questions, subject, onSubjectChange }) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [submitCount, setSubmitCount] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const handleSubmit = () => {
    setSubmitCount(submitCount + 1);
  };

  const handleUpdateScore = () => {
    setScore(score + 1);
  };

  const handleNextQuestion = () => {
    setCurrentQuestionIdx(currentQuestionIdx + 1);
  };

  const handleFinish = () => {
    setIsFinished(true);
  };

  const handlePlayAgain = () => {
    onSubjectChange('');
  };

  return (
    <div className="quiz">
      {!isFinished ? (
        <>
          <div className="quiz__question-half">
            <Question
              question={questions[currentQuestionIdx].question}
              index={currentQuestionIdx + 1}
              submitCount={submitCount}
              total={questions.length}
            />
          </div>
          <div className="quiz__answers-half">
            <Answer
              options={questions[currentQuestionIdx].options}
              answer={questions[currentQuestionIdx].answer}
              isLastQuestion={submitCount === questions.length}
              onSubmit={handleSubmit}
              onNextQuestion={handleNextQuestion}
              updateScore={handleUpdateScore}
              onFinish={handleFinish}
            />
          </div>
        </>
      ) : (
        <Score
          score={score}
          subject={subject}
          total={questions.length}
          onPlayAgain={handlePlayAgain}
        />
      )}
    </div>
  );
}

export default Quiz;
