import React, { useContext } from 'react';
import SubjectIcon from '../SubjectIcon';
import lightSun from '../../../assets/images/icon-sun-light.svg';
import darkSun from '../../../assets/images/icon-sun-dark.svg';
import lightMoon from '../../../assets/images/icon-moon-light.svg';
import darkMoon from '../../../assets/images/icon-moon-dark.svg';
import { Theme } from '../../context/ThemeProvider';

function Header({ subject }) {
  const { isDarkMode, toggleTheme } = useContext(Theme);

  const sun = isDarkMode ? lightSun : darkSun;
  const moon = isDarkMode ? lightMoon : darkMoon;

  return (
    <header className="header">
      {subject && (
        <div className="header__subject">
          <SubjectIcon subject={subject} />
          <span className="header__subject-name">{subject}</span>
        </div>
      )}
      <div className="header__theme-controller">
        <img className="header__theme-icon" src={sun} alt="Sun" />
        <button
          aria-label="Toggle Theme"
          onClick={toggleTheme}
          className={
            isDarkMode
              ? 'header__toggle-theme-btn dark'
              : 'header__toggle-theme-btn'
          }
        ></button>
        <img className="header__theme-icon" src={moon} alt="Night" />
      </div>
    </header>
  );
}

export default Header;
