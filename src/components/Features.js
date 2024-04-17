import React from 'react'
import Prompt from "../images/features/prompt.png"
import Pro from "../images/features/pro.png"
import Build from "../images/features/build.png"
import Edit from "../images/features/edit.png"
import Respons from "../images/features/respons.png"
import Update from "../images/features/update.png"
import "./Features.css"

function Features() {
  return (
    <div className='features-container'>
        <div className='feature-title'>
            <h2>Features</h2>
        </div>
        <div className='feature-prompt'>
            <img src={Prompt}/>
            <h3>Prompt</h3>
        </div>
        <div className='prompt-container'>
        <div className='prompt-left-side'>
            <div className='build feature-icon-container'>
                <img className='feature-icon' src={Build} />
                <p className='feature-desc'>fast and easy to build a website for your company</p>
            </div>
            <div className='edit feature-icon-container'>
                <img className='feature-icon' src={Edit} />
                <p className='feature-desc'>you can edit your website and change text, pictures and many more</p>
            </div>
        </div>
        <div className='prompt-right-side'>
            <div className='respons feature-icon-container'>
                <img className='feature-icon' src={Respons} />
                <p className='feature-desc'>all the website come with responsiveness and you can see them</p>
            </div>
            <div className='update feature-icon-container'>
                <img className='feature-icon' src={Update} />
                <p className='feature-desc'>you can regenerate each page that you don’t like it or want to make it better</p>
            </div>
        </div>
        </div>

        <div className='feature-prompt'>
            <img src={Pro}/>
            <h3>Pro</h3>
        </div>
        <div className='prompt-container'>
        <div className='prompt-left-side'>
            <div className='build feature-icon-container'>
                <img className='feature-icon' src={Build} />
                <p className='feature-desc'>fast and easy to build a website for your company</p>
            </div>
            <div className='edit feature-icon-container'>
                <img className='feature-icon' src={Edit} />
                <p className='feature-desc'>you can edit your website and change text, pictures and many more</p>
            </div>
        </div>
        <div className='prompt-right-side'>
            <div className='respons feature-icon-container'>
                <img className='feature-icon' src={Respons} />
                <p className='feature-desc'>all the website come with responsiveness and you can see them</p>
            </div>
            <div className='update feature-icon-container'>
                <img className='feature-icon' src={Update} />
                <p className='feature-desc'>you can regenerate each page that you don’t like it or want to make it better</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Features