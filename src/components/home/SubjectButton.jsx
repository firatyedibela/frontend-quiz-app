import React, { useContext } from 'react';
import { Theme } from '../../context/ThemeProvider';
import SubjectIcon from '../SubjectIcon';

function SubjectButton({ subject, onSubjectChange }) {
  const { isDarkMode } = useContext(Theme);

  return (
    <button
      className={isDarkMode ? 'subject-btn dark' : 'subject-btn'}
      onClick={() => onSubjectChange(subject)}
    >
      <SubjectIcon subject={subject} />
      {subject}
    </button>
  );
}

export default SubjectButton;
