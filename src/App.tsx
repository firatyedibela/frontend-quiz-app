import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Subject } from './components/context/subject-provider';
import { Theme } from './components/context/theme-provider';
import Header from './components/Header';
import { Home } from './components/Home';
import { Quiz } from './components/Quiz';
import { QuizType } from './types/quiz';

function App() {
  const { subject } = useContext(Subject);
  const { isDarkMode } = useContext(Theme);
  const [quizzes, setQuizzes] = useState<QuizType[]>([]);

  useEffect(() => {
    if (isDarkMode) document.body.classList.add('dark');
    else document.body.classList.remove('dark');
  }, [isDarkMode]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/data.json');
        if (!response.ok) throw new Error('Error fetching data!');
        const data = await response.json();
        setQuizzes(data.quizzes);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <main className="main">
        {subject ? <Quiz quizzes={quizzes} subject={subject} /> : <Home />}
      </main>
    </div>
  );
}

export default App;
