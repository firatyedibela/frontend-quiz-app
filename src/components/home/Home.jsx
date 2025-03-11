import React, { useContext } from 'react';
import { Theme } from '../../context/ThemeProvider';
import SubjectButton from './SubjectButton';

const subjectList = ['HTML', 'CSS', 'JavaScript', 'Accessibility'];

function Home({ onSubjectChange }) {
  const { isDarkMode } = useContext(Theme);

  return (
    <div className="home">
      <div className="home__welcome-half">
        <h1
          className="home__title"
          style={{ color: isDarkMode ? 'white' : undefined }}
        >
          Welcome to the <br /> <strong>Frontend Quiz</strong>
        </h1>
        <p
          className="home__pick-subject-text"
          style={{ color: isDarkMode ? '#abc1e1' : '#626C7F' }}
        >
          Pick a subject to get started.
        </p>
      </div>

      <ul className="home__subject-btns-container">
        {subjectList.map((subject) => (
          <li key={subject}>
            <SubjectButton
              key={subject}
              onSubjectChange={onSubjectChange}
              subject={subject}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
