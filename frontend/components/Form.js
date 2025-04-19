import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { inputChange, postQuiz } from '../state/action-creators'


export function Form(props) {
  const dispatch = useDispatch()
  const form = useSelector(state => state.form)
  const isDisabled = 
  form.newQuestion.trim().length < 1 ||
  form.newTrueAnswer.trim().length < 1||
  form.newFalseAnswer.trim().length < 1


  const onChange = evt => {
    const {name, value} = evt.target
    dispatch(inputChange(name, value))
  }

  const onSubmit = evt => {
evt.preventDefault()
const payload = {
  question_text: form.newQuestion.trim(),
  true_answer_text: form.newTrueAnswer.trim(),
  false_answer_text: form.newFalseAnswer.trim()
}
dispatch(postQuiz(payload))
  }

  return (
    <form id="form" onSubmit={onSubmit}>
      <h2>Create New Quiz</h2>
      <input name='newQuestion'maxLength={50} onChange={onChange} value={form.newQuestion} id="newQuestion" placeholder="Enter question" />
      <input name='newTrueAnswer'maxLength={50} onChange={onChange} value={form.newTrueAnswer} id="newTrueAnswer" placeholder="Enter true answer" />
      <input name='newFalseAnswer'maxLength={50} onChange={onChange} value={form.newFalseAnswer} id="newFalseAnswer" placeholder="Enter false answer" />
      <button id="submitNewQuizBtn" disabled={isDisabled}>Submit new quiz</button>
    </form>
  )
}

export default Form
