import React from 'react'

function Homes() {
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