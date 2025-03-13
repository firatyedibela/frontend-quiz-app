import React from 'react';
import correctIcon from '../../../assets/images/icon-correct.svg';
import wrongIcon from '../../../assets/images/icon-incorrect.svg';

const indexMap = {
  0: 'A',
  1: 'B',
  2: 'C',
  3: 'D',
};

function AnswerRadio({ value, name, isCorrect, isChecked, index, onChange }) {
  return (
    <label
      htmlFor={value}
      className={isCorrect ? 'answer-option correct' : 'answer-option wrong'}
    >
      <input
        checked={isChecked}
        type="radio"
        value={value}
        id={value}
        name={name}
        onChange={onChange}
      />
      <span className="answer-index">{indexMap[index]}</span>
      <span className="answer-text">{value}</span>
      <img
        className="answer-icon"
        src={isCorrect ? correctIcon : wrongIcon}
        alt={`${isCorrect ? 'Correct' : 'Wrong'} icon`}
      />
    </label>
  );
}

export default AnswerRadio;
