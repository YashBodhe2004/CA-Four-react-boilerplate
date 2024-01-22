import React, { useState } from 'react';
import questionsData from '../questions';
import ResultUpdated from './Result';


export default function QuestionBoxModified({ questions, totalQuestions }) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
  const [isHighlighted, setIsHighlighted] = useState(false);
  const { text, options } = questionsData[currentQuestionIndex];


  const handleAnswerUpdate = function (isCorrect) {
    if (isCorrect === true) {
      setCorrectAnswersCount((prevCount) => prevCount + 1);
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };


  let toggleHighlight = function () {
    if (isHighlighted === false) {
      setIsHighlighted((prev) => (prev = true));
    }
  };


  let removeHighlight = function () {
    if (isHighlighted === true) setIsHighlighted((prev) => (prev = false));
  };


  if (currentQuestionIndex === totalQuestions - 1) {
    return <ResultUpdated answerCount={correctAnswersCount} />;
  }
 


  return (
    <div className='ContainerModified'>
      <h2>Question: {currentQuestionIndex + 1}/5</h2>
      <h2 style={{ color: isHighlighted ? 'red' : null }} className='h2Modified'>
        {text}
      </h2>
      <ul>
        {options.map((item, i) => (
          <li className='newButton' key={i} idd={item.id} onClick={() => handleAnswerUpdate(item.isCorrect)}>
            {item.text}
          </li>
        ))}
      </ul>
      <button onClick={toggleHighlight} className='appButton h3Modified'>
        Highlight
      </button>
      <button onClick={removeHighlight} className='appButton h4Modified'>
        Remove Highlight
      </button>
    </div>
  );
}
