import React from 'react'
import "./MeetTeam.css"

function MeetTeam() {
  return (
    <div className='meet-team-container'>
      <div className='meet-team-title'>
        <h2>Meet our Team</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
      </div>
      <div className='meet-team-content'>
          <div className='meet-team-section'>
            <div className='circle-shape'></div>
            <h4>Name of the member</h4>
            <p>UX/UI Designer</p>
          </div>
          <div className='meet-team-section'>
            <div className='circle-shape'></div>
            <h4>Name of the member</h4>
            <p>UX/UI Designer</p>
          </div>
          <div className='meet-team-section'>
            <div className='circle-shape'></div>
            <h4>Name of the member</h4>
            <p>UX/UI Designer</p>
          </div>
          <div className='meet-team-section'>
            <div  className='circle-shape'></div>
            <h4>Name of the member</h4>
            <p>UX/UI Designer</p>
          </div>
      </div>
    </div>
  )
}

export default MeetTeam