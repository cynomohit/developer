import React from 'react'

const Question = ({
  question,
  index,
  onAnswerSelected,
  onNext,
  onPrev,
  onFinish,
  hfinish,
  hprev,
  hnext,
  totalQues
}) => {
  return (
	<div>
    <h3>{question.question}</h3>
    
      <ol type="a">
      {question.answers.map((answer, i) =>
        <li key={`${index}-${i}`}>
          <input type="radio" name={`question_${index}`} id={`question_${index}_answer_${i}`} defaultChecked={answer.checked} value={i} onChange={onAnswerSelected} />
          {' '}
          <label htmlFor={`question_${index}_answer_${i}`}>{answer.label}</label>
        </li>
      )}
      </ol>
	<button hidden={hprev} onClick={onPrev}>Prev</button> 
        <button hidden={hnext} onClick={onNext}>Next</button>
        <button hidden={hfinish} onClick={onFinish}>Finish</button>
	
	<br></br>
        </div>
    
  )
}

export default Question
