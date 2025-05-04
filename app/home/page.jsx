'use client'
import React, { useState, useEffect } from 'react'

function Taskshow({ name, time, remainingTime, started, onDelete, onComplete, onEdit, onStart }) {
  const mins = Math.floor(remainingTime / 60)
  const secs = remainingTime % 60

  return (
    <div className='taskdisplayname1'>
      <div className="play">
      <button onClick={onStart} disabled={started}><img src="playtimer1.png" alt="logo" /></button>
      </div>
      <div className="taskname11">
        <div className="taskname12"><p>{name}</p></div>
        <div className="tasktimeduration">
          <div className="imageti"><img src="timer.png" alt="" /></div>
          <div className="timedisplay"><p>{mins}m {secs}s</p></div>
        </div>
        <div className="progressionbar12">
          <div
            className="progressionbarfill12"
            style={{
              width: `${100 - (remainingTime / (time * 60)) * 100}%`
            }}
          ></div>
        </div>
      </div>
      <div className="imagesdoneedit">
    
        <div onClick={onComplete} className="imgdone"><img src="done.png" alt="" /></div>
        <div onClick={onEdit} className="imgedit"><img src="edit.png" alt="" /></div>
        <div onClick={onDelete} className="imgdeleter"><img src="delete.png" alt="" /></div>
      </div>
    </div>
  )
}

function Homes() {
  const [task, settask] = useState([])
  const [input, setinput] = useState('')
  const [timeInput, setTimeInput] = useState('')
  const [editindex, seteditindex] = useState(null)
  const [edittext, setedittext] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('tasks')
    if (saved) settask(JSON.parse(saved))
  }, [])

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(task))
  }, [task])

  useEffect(() => {
    const interval = setInterval(() => {
      settask(prev =>
        prev.map(t =>
          t.started && t.remainingTime > 0
            ? { ...t, remainingTime: t.remainingTime - 1 }
            : t
        )
      )
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  function handleinput(e) {
    setinput(e.target.value)
  }

  function handleTimeInput(e) {
    setTimeInput(e.target.value)
  }

  function handletasks() {
    if (input.trim() === '' || timeInput.trim() === '') return
    const mins = parseInt(timeInput)
    settask(prev => [
      {
        id: Date.now(),
        text: input.trim(),
        time: mins,
        remainingTime: mins * 60,
        completed: false,
        started: false
      },
      ...prev
    ])
    setinput('')
    setTimeInput('')
  }

  function deletetask(index) {
    const alltask = [...task]
    alltask.splice(index, 1)
    settask(alltask)
  }

  function editingtext(index) {
    seteditindex(index)
    setedittext(task[index].text)
  }

  function savingedit(index) {
    const alltask = [...task]
    alltask[index] = { ...alltask[index], text: edittext }
    settask(alltask)
    seteditindex(null)
    setedittext('')
  }

  function handleedit(e) {
    setedittext(e.target.value)
  }

  function completed(index) {
    settask(prev =>
      prev.map((t, i) => i === index ? { ...t, completed: !t.completed } : t)
    )
  }

  function startTask(index) {
    settask(prev =>
      prev.map((t, i) =>
        i === index ? { ...t, started: true } : t
      )
    )
  }

  const activetask = task.filter(t => !t.completed)
  const closedtask = task.filter(t => t.completed)

  return (
    <div className="homes">
      <div className="abouthome">
        <h1>Your Tasks</h1>
        <h5>Manage your tasks and track your progress</h5>
      </div>

      <div className="progressionbarinfo">
        <div className="progress">
          <div className="pro"><p>Progress</p></div>
          <div className="precentdisplay">
            <img src="percent.png" alt="" />
            <p>
              {task.length > 0 ? `${Math.round((closedtask.length / task.length) * 100)}%` : '0%'}
            </p>
          </div>
        </div>
        <div className="probar">
          <div
            className="probarfill"
            style={{
              width: `${task.length > 0 ? (closedtask.length / task.length) * 100 : 0}%`,
              backgroundColor: '#52a8ff'
            }}
          ></div>
        </div>
        <div className="displaycompletedtask">
          <p>{closedtask.length}/{task.length} Tasks Completed</p>
          <p>{activetask.length} remaining</p>
        </div>
      </div>

      <div className="addtasksdiv">
        <div className="addnew"><p>Add New Tasks</p></div>
        <div className="inputtaskbar">
          <input placeholder='Enter task title' type="text" value={input} onChange={handleinput} />
        </div>
        <div className="addtimereachtask">
          <div className="timename"><p>Time(minutes)</p></div>
          <div className="inputtimemin">
            <input type="number" min='0' value={timeInput} onChange={handleTimeInput} />
          </div>
        </div>
        <button onClick={handletasks} className="buttonaddtask">
          <div className="mgadd"><p>+</p></div>
          <div className="addtaskpname"><p>Add Task</p></div>
        </button>
      </div>

      <div className="pendingtask">
        <div className='pendingtask'><p>Pending Tasks</p></div>
        <div className="displaypendingtask">
          {task.map((t, index) =>
            !t.completed && (
              <div key={t.id}>
                {editindex === index ? (
                  <div className="edit-task">
                    <input type="text" value={edittext} onChange={handleedit} />
                    <button onClick={() => savingedit(index)}>Save</button>
                  </div>
                ) : (
                  <Taskshow
                    name={t.text}
                    time={t.time}
                    remainingTime={t.remainingTime}
                    started={t.started}
                    onDelete={() => deletetask(index)}
                    onComplete={() => completed(index)}
                    onEdit={() => editingtext(index)}
                    onStart={() => startTask(index)}
                  />
                )}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Homes
