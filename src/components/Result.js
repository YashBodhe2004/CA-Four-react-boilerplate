import React from 'react';

export default function ResultUpdated({ answerCount, onReturnClick }) {
  let comment;
  switch (true) {
    case answerCount < 3:
      comment = 'You could have done better!!';
      break;
    case answerCount < 5:
      comment = 'Good attempt :) keep it up!!';
      break;
    case answerCount === 5:
      comment = 'You have done amazing!!';
      break;
    default:
      comment = 'Amazing!!!';
  }

  const accuracyPercentage = ((answerCount / 5) * 100).toFixed(2) + '%';

  onReturnClick = () => {
    window.location.reload()
  }

  return (
    <div className='Container2Modified'>
      <p className='superTextModified'> Result </p>
      <h2 id='comment'>{comment}</h2>
      <h2> Accuracy: <span id='accuracy'>{accuracyPercentage}</span></h2>

      {/* "Return" button */}
      <button onClick={onReturnClick} className='appButton'>
        Return
      </button>
    </div>
  );
}