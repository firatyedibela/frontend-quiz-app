import htmlIcon from '../../assets/images/icon-html.svg';
import cssIcon from '../../assets/images/icon-css.svg';
import jsIcon from '../../assets/images/icon-js.svg';
import accessibilityIcon from '../../assets/images/icon-accessibility.svg';

type SubjectIconProps = {
  subject: string;
};

const iconMap: Record<string, string> = {
  HTML: htmlIcon,
  CSS: cssIcon,
  JavaScript: jsIcon,
  Accessibility: accessibilityIcon,
};

const bgColorMap: Record<string, string> = {
  HTML: '#FFF1E9',
  CSS: '#E0FDEF',
  JavaScript: '#EBF0FF',
  Accessibility: '#F6E7FF',
};

function SubjectIcon({ subject }: SubjectIconProps) {
  const icon = iconMap[subject];
  const bgColor = bgColorMap[subject];

  return (
    <img
      className="subject-icon"
      style={{ backgroundColor: bgColor }}
      src={icon}
      alt={`An icon of ${subject}`}
    />
  );
}

export default SubjectIcon;
