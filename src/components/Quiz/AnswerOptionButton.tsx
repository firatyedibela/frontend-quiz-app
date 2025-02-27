import correctIcon from '../../../assets/images/icon-correct.svg';
import wrongIcon from '../../../assets/images/icon-incorrect.svg';

type AnswerOptionProps = {
  option: string;
  optionIndex: number;
  isCorrect: boolean;
  onSelect: (option: string) => void;
};

const OptionMap: Record<number, string> = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
};

function AnswerOption({
  option,
  optionIndex,
  isCorrect,
  onSelect,
}: AnswerOptionProps) {
  const icon = isCorrect ? correctIcon : wrongIcon;

  return (
    <label
      className={`quiz__option-btn answer-option-btn ${
        isCorrect ? 'correct' : 'wrong'
      }`}
    >
      <div className="option-index">{OptionMap[optionIndex]}</div>
      <input
        onClick={() => onSelect(option)}
        type="radio"
        name="answer-option"
        value={option}
        id="answer-option-input"
      />{' '}
      <p className="option-text">{option}</p>
      <img
        className="answer-icon"
        src={icon}
        alt={`${isCorrect ? 'Correct ' : 'Wrong'} answer icon.`}
      />
    </label>
  );
}

export default AnswerOption;
