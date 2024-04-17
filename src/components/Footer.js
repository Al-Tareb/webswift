import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faInstagram } from '@fortawesome/free-brands-svg-icons'; 
import { faFacebook } from '@fortawesome/free-brands-svg-icons'; 
import { faTwitter } from '@fortawesome/free-brands-svg-icons'; 
import { faSnapchat } from '@fortawesome/free-brands-svg-icons';

import "./Footer.css"

function Footer() {
  return (
    <div className='footer-container'>
    <div className='footer-box'>
        <span className='footer-logo'><Link><img className='footer-logo-img' src={Logo} /></Link></span>
        <ul className='footer-navbar-items'>
           <li className='footer-nav-item'><Link className='footer-item-link'>Home</Link></li>
           <li className='footer-nav-item'><Link className='footer-item-link'>Features</Link></li>
           <li className='footer-nav-item'><Link className='footer-item-link'>Price</Link></li>
           <li className='footer-nav-item'><Link className='footer-item-link'>About Us</Link></li>  
           <li className='footer-nav-item'><Link className='footer-item-link'>Contact Us</Link></li>
        </ul>
        <div className='footer-navbar-right-side'>
            <span><FontAwesomeIcon icon={faInstagram} /></span>
            <span><FontAwesomeIcon icon={faFacebook} /></span>
            <span><FontAwesomeIcon icon={faTwitter} /></span>
            <span><FontAwesomeIcon icon={faSnapchat} /></span>
        </div>
    </div>
    <div className='footer-line'></div>
    <div><p className='copy-right'>© power 2023 - All Rights Reserved</p></div>
</div>
  )
}

export default Footer