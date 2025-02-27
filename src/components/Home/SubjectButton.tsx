import { useContext } from 'react';
import { Subject } from '../context/subject-provider';
import { Theme } from '../context/theme-provider';
import SubjectIcon from '../SubjectIcon';

type SubjectButtonProps = {
  subject: string;
};

function SubjectButton({ subject }: SubjectButtonProps) {
  const { isDarkMode } = useContext(Theme);
  const { setSubject } = useContext(Subject);

  return (
    <button
      style={{
        backgroundColor: isDarkMode ? '#3B4D66' : 'white',
        color: isDarkMode ? 'white' : '#313e51',
      }}
      onClick={() => setSubject(subject)}
      className="subject-btn"
    >
      <SubjectIcon subject={subject} />
      {subject}
    </button>
  );
}

export default SubjectButton;
