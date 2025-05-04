'use client'
import React, { useEffect, useState } from 'react'

function Completed() {
  const [completedTasks, setCompletedTasks] = useState([])
  function Comp({id,text,time}){
    return(
      <div key={id}>
        <div  className="completeddivmain">
          <div className="completedtaskname">
            <p>{text}</p>
          </div>
          <div className="timeforcompletdtask">
            <img src="timer.png" alt="" />
            <p>{time} Minutes</p>
          </div>
          <div className="progressionbar22">
            <div className="progressionbarfill"></div>
          </div>
        </div>


      </div>
    )

  }

  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) {
      const tasks = JSON.parse(saved)
      const completed = tasks.filter(task => task.completed)
      setCompletedTasks(completed)
    }
  }, [])

  return (
    <div className="homes1">
      <div className="namecomple">
        <h1>Completed Tasks</h1>
        <h5>You've completed {completedTasks.length} task{completedTasks.length !== 1 && 's'}.</h5>
      </div>
      
      {completedTasks.map((task)=>(
        <Comp id={task.id} text={task.text} time={task.time}/>
      ))}

      
    </div>
  )
}

export default Completed
