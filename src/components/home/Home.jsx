import React from 'react';
import SubjectButton from './SubjectButton';

const subjectList = ['HTML', 'CSS', 'JavaScript', 'Accessibility'];

function Home({ onSubjectChange }) {
  return (
    <div className="home">
      <div className="home__welcome-half">
        <h1 className="home__title">
          Welcome to the <strong>Frontend Quiz</strong>
        </h1>
        <p className="home__pick-subject-text">
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
