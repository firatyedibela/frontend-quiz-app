import { useState } from 'react';
import { QuizType } from '../../types/quiz';
import Answer from './Answer';
import Question from './Question';

type QuizProps = {
  subject: string;
  quizzes: QuizType[];
};

function Quiz({ subject, quizzes }: QuizProps) {
  const [score, setScore] = useState(0);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const questions =
    quizzes.find((quiz) => quiz.title === subject)?.questions ?? [];

  const handleNext = () => {
    setCurrentQuestionIdx((curr) => curr + 1);
  };

  const updateScore = () => {
    setScore(score + 1);
  };

  return (
    <div className="quiz">
      <Question
        current={currentQuestionIdx}
        count={questions.length}
        text={questions[currentQuestionIdx].question}
      />

      <Answer
        updateScore={updateScore}
        handleNext={handleNext}
        options={questions[currentQuestionIdx].options}
        correctAnswer={questions[currentQuestionIdx].answer}
      />
    </div>
  );
}

export default Quiz;
