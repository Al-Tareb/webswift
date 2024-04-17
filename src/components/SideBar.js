import React from 'react'
import side1 from "../images/slider/slid1.png"
import side2 from "../images/slider/slid2.png"
import side3 from "../images/slider/slid3.png"
import side4 from "../images/slider/slid4.png"
import side5 from "../images/slider/slid5.png"
import side6 from "../images/slider/slid6.png"
import side7 from "../images/slider/slid7.png"
import "./SideBar.css"

function SideBar() {
  return (
    <div>
        <h2 className='side-bar-title'>600,000+ website created by one click</h2>
        <div className='sidebar-container'>
            <span><img src={side1} /></span>
            <span><img src={side2} /></span>
            <span><img src={side3} /></span>
            <span><img src={side4} /></span>
            <span><img src={side5} /></span>
            <span><img src={side6} /></span>
            <span><img src={side7} /></span>
        </div>
    </div>
  )
}

export default SideBar