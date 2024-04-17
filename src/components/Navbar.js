import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import Classnames from "classnames";

import './Navbar.css'

function Navbar({ open , setOpen}) {
  return (
    <div className='main-navbar'>
        <div className='navbar-container'>
            <div className='navbar-box'>
                <span className='logo'><Link><img className='logo-img' src={Logo} /></Link></span>
                <div className='burger' open={open} onClick={()=> setOpen(!open)} >
                   <div className={ Classnames('bar',{'bar-hidden': open } )}></div>
                   <div className={ Classnames('bar',{'bar-hidden': open } )}></div>
                   <div className={ Classnames('bar',{'bar-hidden': open } )}></div>
                </div>
                
                <div className={ Classnames('drop-down-main',{'drop-down-main-hide': open } )} open={open} onClick={()=> setOpen(!open)}>
                   <ul className='navbar-items'>
                       <li className='nav-item'><Link className='item-link'>Home</Link></li>
                       <li className='nav-item'><Link className='item-link'>Features</Link></li>
                       <li className='nav-item'><Link className='item-link'>Price</Link></li>
                       <li className='nav-item'><Link className='item-link'>About Us</Link></li>
                       <li className='nav-item'><Link className='item-link'>Contact Us</Link></li>
                   </ul>
                   <div className='navbar-right-side'>
                      <button className='log-in-btn'>LOG IN</button>
                      <button className='sign-up-btn'>SIGN UP</button>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar