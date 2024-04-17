import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'; 
import { faUser } from '@fortawesome/free-regular-svg-icons'; 
import "./Questions.css"

function Questions() {
  return (
    <div className='question-container'>
       <div className='question-content'>
           <div className='question-left-side'>
              <h2>Frequently Asked Questions</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est </p>
              <h5>Email</h5>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <FontAwesomeIcon icon={faEnvelope} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: '#888' }} />
                <input type="text" placeholder="example@gmail.com" style={{ paddingLeft: '30px' }} />
              </div>
              <h5>Your name</h5>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <FontAwesomeIcon icon={faUser} style={{ position: 'absolute', top: '50%', left: '10px', transform: 'translateY(-50%)', color: '#888' }} />
                <input type="text" placeholder="Abdullah Al-Tareb" style={{ paddingLeft: '30px' }} />
              </div>
              <button>Contact Us</button>
           </div>
           <div className='question-right-side'>
            <div className='question-section'>
                <h3>is there any problems?</h3>
                <span className='add-question'><h4>+</h4></span>
            </div>
            <div className='question-section'>
                <h3>is there any problems?</h3>
                <span className='add-question'><h4>+</h4></span>
            </div>
            <div className='question-section'>
                <h3>is there any problems?</h3>
                <span className='add-question'><h4>+</h4></span>
            </div>
            <div className='question-section'>
                <h3>is there any problems?</h3>
                <span className='add-question'><h4>+</h4></span>
            </div>
            <div className='question-section'>
                <h3>is there any problems?</h3>
                <span className='add-question'><h4>+</h4></span>
            </div>
            <div className='question-section'>
                <h3>is there any problems?</h3>
                <span className='add-question'><h4>+</h4></span>
            </div>
           </div>
       </div>
    </div>
  )
}

export default Questions