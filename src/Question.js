import React from 'react'
import './Question.css'
const Question = ({
  question,
  index,
  onAnswerSelected,
  onSubmit
}) => {
  return (
    <div>
      <h3>Category: {question.category}</h3>
      <h3>{question.question}</h3>
      {question.answers.map((answer, i) =>
        <h1 onClick={onAnswerSelected} name={`question_${index}`} id={`question_${index}_answer_${i}`}
        defaultChecked={false} htmlFor={`question_${index}_answer_${i}`} value={i}>{answer.label}</h1>
      )}
    </div>
  )
}

export default Question
