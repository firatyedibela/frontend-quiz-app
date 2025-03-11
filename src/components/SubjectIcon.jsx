import htmlIcon from '../../assets/images/icon-html.svg';
import cssIcon from '../../assets/images/icon-css.svg';
import jsIcon from '../../assets/images/icon-js.svg';
import accessibilityIcon from '../../assets/images/icon-accessibility.svg';

const iconMap = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  Accessibility: accessibilityIcon,
};

const bgColorMap = {
  HTML: '#FFF1E9',
  CSS: '#E0FDEF',
  JavaScript: '#EBF0FF',
  Accessibility: '#F6E7FF',
};

function SubjectIcon({ subject }) {
  const icon = iconMap[subject];
  const bgColor = bgColorMap[subject];

  return (
    <img
      className="subject-icon"
      src={icon}
      alt={`${subject} icon`}
      style={{ backgroundColor: bgColor }}
    />
  );
}

export default SubjectIcon;
