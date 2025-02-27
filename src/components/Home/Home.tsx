import { useContext } from 'react';
import { Theme } from '../context/theme-provider';
import SubjectButton from './SubjectButton';

function Home() {
  const { isDarkMode } = useContext(Theme);

  return (
    <div className="home">
      <div className="home__title-half">
        <h1
          style={{ color: isDarkMode ? 'white' : undefined }}
          className="home__title"
        >
          Welcome to the <span>Frontend Quiz!</span>{' '}
        </h1>
        <p
          style={{ color: isDarkMode ? '#abc1e1' : '#626C7F' }}
          className="home__pick-subject-text"
        >
          Pick a subject to get started.
        </p>
      </div>
      <div className="home__subjects-half">
        <SubjectButton subject="HTML" />
        <SubjectButton subject="CSS" />
        <SubjectButton subject="JavaScript" />
        <SubjectButton subject="Accessibility" />
      </div>
    </div>
  );
}

export default Home;
