import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { MOVE_CLOCKWISE, MOVE_COUNTERCLOCKWISE } from '../state/action-types'

export default function Wheel(props) {
const dispatch = useDispatch()
const position = useSelector(state => state.wheel)

const handleClockwise = () => {
  dispatch({type: MOVE_CLOCKWISE})
}

const handleCounterClockwise = () => {
  dispatch({type:MOVE_COUNTERCLOCKWISE})
}

  return (
    <div id="wrapper">
      <div id="wheel">
        {[...Array(6)].map((_, idx) => (
          <div
          key={idx}
          className={`cog ${idx === position ? 'active' : ''}`}
          style={{'--i': idx}}
          >
            {idx === position ? 'B' : ''}
          </div>
        ))}
       {/* --i is a custom CSS property, no need to touch that nor the style object */}
      </div>
      <div id="keypad">
        <button id="counterClockwiseBtn"  onClick={handleCounterClockwise}>Counter clockwise</button>
        <button id="clockwiseBtn" onClick={handleClockwise}>Clockwise</button>
      </div>
    </div>
  )
}
