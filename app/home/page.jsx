'use client'
import React,{useState} from 'react'


function Homes() {
  const[task,settask]=useState([])
  const[input,setinput]=useState('')
  const[editindex,seteditindex]=useState(null)
  const[edittext,setedittext]=useState('')

  function handleinput(e){
    setinput(e.target.value())
  }
  function handletasks(){
    settask(prev=>[{text:input.trim(),completed:false},...prev])
  }
  function deletetask(index){
    const alltask=[...task]
    alltask.slice(index,1)
    settask(alltask)
  }
  function editingtext(index){
    seteditindex(index)
    setedittext(task[index].text)
  }
  function savingedit(index){
    const alltask=[...task]
    alltask[index]={...alltask[index],text:edittext}
  }





  return (
    <div className="homes" >
      <div className="abouthome">
        <h1>Your Tasks</h1>
        <h5>Manage your tasks and track your progress</h5>
      </div>
      <div className="progressionbarinfo">
        <div className="progress">
          <div className="pro"><p>Progress</p></div>
          <div className="precentdisplay"><img src="percent.png" alt="" /><p>89%</p></div>

        </div>
        <div className="probar">
          <div className="probarfill">

          </div>
        </div>
        <div className="displaycompletedtask">
          <div className="taskdone">
            <p>8/16 Tasks Completed</p>
          </div>
          <div className="remaining">
            <p>8 remaining</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homes