'use client'
import React, { useState } from 'react'

function Taskshow({ name, time, onDelete, onComplete, onEdit }) {
  return (
    <div className='taskdisplayname1'>
      <div className="taskname11">
        <div className="taskname12"><p>{name}</p></div>
        <div className="tasktimeduration">
          <div className="imageti">
            <img src="timer.png" alt="" />
          </div>
          <div className="timedisplay">
            <p>{time}min</p>
          </div>
        </div>
        <div className="progressionbar12">
          <div className="progressionbarfill12"></div>
        </div>
      </div>
      <div className="imagesdoneedit">
        <div onClick={onComplete} className="imgdone">
          <img src="done.png" alt="" />
        </div>
        <div onClick={onEdit} className="imgedit">
          <img src="edit.png" alt="" />
        </div>
        <div onClick={onDelete} className="imgdeleter">
          <img src="delete.png" alt="" />
        </div>
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

  function handleinput(e) {
    setinput(e.target.value)
  }

  function handleTimeInput(e) {
    setTimeInput(e.target.value)
  }

  function handletasks() {
    if (input.trim() === '' || timeInput.trim() === '') return
    settask(prev => [{ text: input.trim(), time: timeInput, completed: false }, ...prev])
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
    settask(prev => prev.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    ))
  }

  const activetask = task.filter((e) => !e.completed)
  const closedtask = task.filter((e) => e.completed)

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
              {task.length > 0
                ? `${Math.round((closedtask.length / task.length) * 100)}%`
                : '0%'}
            </p>
          </div>
        </div>
        <div className="probar">
          <div
            className="probarfill"
            style={{
              width: `${task.length > 0
                ? (closedtask.length / task.length) * 100
                : 0}%`, backgroundColor: '#52a8ff'
            }}
          ></div>
        </div>
        <div className="displaycompletedtask">
          <div className="taskdone">
            <p>{closedtask.length}/{task.length} Tasks Completed</p>
          </div>
          <div className="remaining">
            <p>{activetask.length} remaining</p>
          </div>
        </div>
      </div>

      <div className="addtasksdiv">
        <div className="addnew"><p>Add New Tasks</p></div>
        <div className="inputtaskbar">
          <input
            placeholder='Enter task title'
            type="text"
            value={input}
            onChange={handleinput}
          />
        </div>
        <div className="addtimereachtask">
          <div className="timename"><p>Time(minutes)</p></div>
          <div className="inputtimemin">
            <input
              type="number"
              min='0'
              value={timeInput}
              onChange={handleTimeInput}
            />
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
              <div key={index}>
                {editindex === index ? (
                  <div className="edit-task">
                    <input
                      type="text"
                      value={edittext}
                      onChange={handleedit}
                    />
                    <button onClick={() => savingedit(index)}>Save</button>
                  </div>
                ) : (
                  <Taskshow
                    name={t.text}
                    time={t.time}
                    onDelete={() => deletetask(index)}
                    onComplete={() => completed(index)}
                    onEdit={() => editingtext(index)}
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
