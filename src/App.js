import React, { useEffect, useState } from 'react';
import './App.css';
import questionsData from './questions';
import Result from './components/Result';
import QuestionBoxModified from './components/QuestionBox';

function AppModified() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentTheme, setCurrentTheme] = useState('Dark');

  useEffect(() => {
    document.body.style.backgroundColor = isDarkMode ? 'rgb(74, 48, 0)' : ' rgb(229 188 113)';
    document.body.style.color = isDarkMode ? 'black' : 'black';
  }, [isDarkMode]);

  let toggleDarkMode = function () {
    setIsDarkMode((prev) => !prev);
    setCurrentTheme((prev) => (prev === 'Dark' ? 'Light' : 'Dark'));
  };

  return (
    <div>
      <QuestionBoxModified questions={questionsData} totalQuestions={questionsData.length} />
      <button onClick={toggleDarkMode} className='Ambient appButton'>
        {currentTheme}
      </button>
    </div>
  );
}

export default AppModified;