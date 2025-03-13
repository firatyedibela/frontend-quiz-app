import { useEffect, useState, useRef, useMemo } from 'react';
import Header from './components/layout/Header';
import { Home } from './components/home';
import { Quiz } from './components/quiz';

function App() {
  const [subject, setSubject] = useState('');
  const quizzesRef = useRef([]);

  const handleSubjectChange = (subject) => {
    setSubject(subject);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('../data.json');
        const data = await response.json();
        quizzesRef.current = data.quizzes;
      } catch (err) {
        console.error('Error fetching data: ' + err);
      }
    };

    getData();
  }, []);

  const filteredQuiz = useMemo(
    () => quizzesRef.current.find((quiz) => quiz.title === subject),
    [subject]
  );

  return (
    <div className="app-container">
      <Header subject={subject} />
      <main className="main">
        {subject ? (
          <Quiz
            questions={filteredQuiz.questions}
            subject={subject}
            onSubjectChange={handleSubjectChange}
          />
        ) : (
          <div>
            <Home onSubjectChange={handleSubjectChange} />
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
