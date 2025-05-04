'use client'
import React, { useState, useEffect } from 'react';

function Timer() {
  const [minute, setminute] = useState('');
  const [second, setsecond] = useState(0);
  const [running, setrunning] = useState(false);

  function handleinput(e) {
    setminute(e.target.value);
  }

  useEffect(() => {
    let interval;
    if (running && second > 0) {
      interval = setInterval(() => {
        setsecond(prev => prev - 1);
      }, 1000);
    } else if (second === 0) {
      setrunning(false);
    }
    return () => clearInterval(interval);
  }, [running, second]);

  function starttimer() {
    const min = parseInt(minute, 10) || 0;

    if (second === 0 && !running) {
      if (min <= 0) {
        alert('Enter time greater than 0 minute');
        return;
      }
      setsecond(min * 60);
      setrunning(true);
    } else {
      setrunning(prev => !prev);
    }
  }

  function handlereset() {
    setrunning(false);
    setminute('');
    setsecond(0);
  }

  const format = (sec) => {
    const min = Math.floor(sec / 60);
    const seco = sec % 60;
    return `${String(min).padStart(2, '0')}:${String(seco).padStart(2, '0')}`;
  };

  function min15() {
    setminute(15);
    setsecond(15 * 60);
    setrunning(false);
  }

  function min30() {
    setminute(30);
    setsecond(30 * 60);
    setrunning(false);
  }

  function min45() {
    setminute(45);
    setsecond(45 * 60);
    setrunning(false);
  }

  return (
    <div className='homes1'>
      <div className="abouttimer">
        <h1>Task Timer</h1>
        <h5>Add Timer</h5>
      </div>
      <div className="pomodoro">
        <div className="displaytimeleft">
          <h1>{format(second)}</h1>
        </div>
        <div className="progressionbar">
          <div className="progresionbarfill"></div>
        </div>
        <div className="buttons">
          <div className="start">
            <button onClick={starttimer}>
              <div className="b"> <img src={running ? 'timerpause.png' :  'timerstart.png'} alt="start stop" />
                <p>{running ? 'Stop' : second > 0 ? 'Start' : 'Start'}</p></div>

            </button>
          </div>
          <div className="reset">
            <button onClick={handlereset}>
              <div className="a"><img src="timerreset.png" alt="reset" />
                <p>Reset</p></div>

            </button>
          </div>
        </div>
        <div className="minurtesbutton">
          <div className="newnew"><button onClick={min15}>15</button></div>
          <div className="newnew"><button onClick={min30}>30</button></div>
          <div className="newnew"><button onClick={min45}>45</button></div>
          
          
    
        </div>
        <div className="inputtimer">
          <div className="mininp">
            <input type="number" min='0' value={minute} onChange={handleinput} placeholder='Enter Pomodoro Length'/>
          </div>
          <button onClick={() => {
            const min = parseInt(minute, 10) || 0;
            setsecond(min * 60);
            setrunning(false);
          }}>Set</button>
        </div>
      </div>
      <div className="aboutpomodoro">
        <div className="pomname">
          <h3>Pomodoro Technique</h3>
        </div>
        <ul>
          <div className="li">
            <li>Work for 25 minutes (one pomodoro)</li>
            <li>Take a short break (5 minutes)</li>
            <li>After 4 pomodoros, take a longer break (15–30 minutes)</li>
            <li>Repeat to maintain productivity and focus</li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default Timer;
