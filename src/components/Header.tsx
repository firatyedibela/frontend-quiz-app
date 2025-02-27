import { useContext } from 'react';
import { Theme } from './context/theme-provider';
import { Subject } from './context/subject-provider';
import lightSun from '../../assets/images/icon-sun-light.svg';
import darkSun from '../../assets/images/icon-sun-dark.svg';
import lightMoon from '../../assets/images/icon-moon-light.svg';
import darkMoon from '../../assets/images/icon-moon-dark.svg';
import SubjectIcon from './SubjectIcon';

function Header() {
  const { isDarkMode, toggleTheme } = useContext(Theme);
  const { subject } = useContext(Subject);

  const sun = isDarkMode ? lightSun : darkSun;
  const moon = isDarkMode ? lightMoon : darkMoon;

  return (
    <header className="header">
      {subject ? (
        <div className="header__subject-section">
          <SubjectIcon subject={subject} />
          <h2
            className={`header__subject-name`}
            style={{ color: isDarkMode ? 'white' : undefined }}
          >
            {subject}
          </h2>
        </div>
      ) : (
        <div></div>
      )}
      <div className="header__theme-section">
        <img className="header__theme-icon" src={sun} alt="Sun icon" />
        <input
          type="checkbox"
          className={`header__toggle-theme-btn ${isDarkMode ? 'dark' : ''}`}
          onClick={toggleTheme}
        ></input>
        <img className="header__theme-icon" src={moon} alt="Moon icon" />
      </div>
    </header>
  );
}

export default Header;
