import React from 'react'
import Prompt from "../images/features/prompt.png"
import Pro from "../images/features/pro.png"
import "./Price.css"
function Price() {
  return (
    <div className='price-container'>
        <div className='price-title'>
            <h2>Price</h2>
            <p>make a nice and editable website in a minute, and we are here to help you with a lot of suggestions text</p>
        </div>
        <div className='price-content'>
            <div className='price'>
                <span>$32</span>
            </div>
            <div className='product-details'>
            <div className='prompt-price'>
                <img src={Prompt} />
                <h3>Prompt</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button>Start for Free</button>
            </div>
            <div className='pro-price'>
                <img src={Pro} />
                <h3>Pro</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <button>Start Generating</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Price