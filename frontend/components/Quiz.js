import React from 'react'
import { useSelector, useDispatch} from 'react-redux'
import { selectAnswer, postAnswer } from '../state/action-creators'
import { useEffect } from 'react'
import { fetchQuiz } from '../state/action-creators'

export default function Quiz(props) {
const dispatch = useDispatch()
const quiz = useSelector(state => state.quiz)
const selectedAnswer = useSelector(state => state.selectedAnswer)

useEffect(() => {
  if(!quiz) {
    dispatch(fetchQuiz())
  }
}, [dispatch, quiz])

const handleSelect = (id) => {
  dispatch(selectAnswer(id))
}

const handleSubmit = () => {
  if (!selectedAnswer) return 
  dispatch(postAnswer({
    quiz_id: quiz.quiz_id,
    answer_id: selectedAnswer
  }))
}

if (!quiz) return <h3>Loading next quiz...</h3>

  return (
    <div id="quiz">
    <h2>{quiz.question}</h2>
    <div id="quizAnswers">
      {quiz.answers.map(ans => (
        <div
          key={ans.answer_id}
          className={`answer ${selectedAnswer === ans.answer_id ? 'selected' : ''}`}
        >
          {ans.text}
          <button onClick={() => handleSelect(ans.answer_id)}>
            {selectedAnswer === ans.answer_id ? 'SELECTED' : 'Select'}
          </button>
        </div>
      ))}
    </div>
    <button
      id="submitAnswerBtn"
      onClick={handleSubmit}
      disabled={!selectedAnswer}
    >
      Submit answer
    </button>
  </div>
  )
}
