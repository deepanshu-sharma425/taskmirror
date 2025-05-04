'use client'
import React,{useState,useEffect} from 'react'

function Timer() {
  const[minute,setminute]=useState('')
  const[second,setsecond]=useState(0)
  const[running,setrunning]=useState(false)
  function handleinput(e){
    setminute(e.target.value)
  }
  useEffect(()=>{
    let interval;
    if(second>0 && running){
      interval=setInterval(() => {
        setsecond(prev=>prev-1)
        
      }, 1000);
    }
    return()=>clearInterval(interval)
  },[second,running])
  function starttimer(){
    const min=parseInt(minute,10)||0
    if(min<0){
      alert('Enter time greater than 0 Minute')
      return
    }
    setrunning(true)
    setsecond(min*60)

  }
  function handlereset(){
    setrunning(false)
    setminute('')
    setsecond(0)
  }
  const format=(sec)=>{
    if(sec<0){
      return '00:00'
    }
    const min=Math.floor(sec/60)
    const seco=sec%60
    return `${String(min).padStart(2,'0')}:${String(seco).padStart(2,'0')}`
  }



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