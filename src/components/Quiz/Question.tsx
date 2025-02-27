type QuestionPropsType = {
  current: number;
  count: number;
  text: string;
};

function Question({ current, count, text }: QuestionPropsType) {
  return (
    <div className="quiz__question-half">
      <p className="quiz__question-counter">
        Question {current + 1} of {count}
      </p>
      <p className="quiz__question-text">{text}</p>
      <div className="quiz__question-tracker">Question Tracker</div>
    </div>
  );
}

export default Question;
