import React from 'react'

function Timer() {
  return (
    <div className='homes1'>
      <div className="abouttimer">
        <h1>Task Timer</h1>
        <h5>Add Timer</h5>
      </div>
      <div className="pomodoro">
        <p>space for the div</p>

      </div>
      <div className="aboutpomodoro">
        <div className="pomname">
          <h3>Pomodoro Technique</h3>
        </div>
        <ul>
          <div className="li">
            <li>Work for 25 minutes (one pomodoro)</li>
            <li>Take a short break (5 minutes)</li>
            <li>After 4 pomodoros, take a longer break (15-30 minutes)</li>
            <li>Repeat to maintain productivity and focus</li>
          </div>

        </ul>

      </div>


    </div>
  )
}

export default Timer