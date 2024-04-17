import React from 'react'
import DemoPic from "../images/demo-pic.png"
import './Transform.css'

function Transform() {
  return (
    <div className='transform-container'>
      <div className='transform-title'>
        <h2>Transform Text to Design<br></br>
in Minutes, Powered by AI</h2>
      </div>
      <div className='transform-description'>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
      </div>
      <button className='start-generating'>Start Generating</button>
      <div className='transform-img'><img src={DemoPic} /></div>

    </div>
  )
}

export default Transform