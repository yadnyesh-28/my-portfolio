import React from 'react'
import "../MobileNav/MobileNav.css"

import { IoLogoXing } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'


export const MobileNav = ({isOpen, toggleMenu}) => {
  return (<>
    <div className={`mobile-menu ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
    <div className='mobile-menu-container'>
    <a href="#"><IoLogoXing  className="logo" /></a>
    <ul>
        <li><a href='#hero' className='menu-items'>Home</a></li>
        <li><a href='#skills' className='menu-items'>Skills</a></li>
        <li><a href='#workExperience' className='menu-items'>Work Experience</a></li>
        <li><a href='#contact' className='menu-items'>Contact Me</a></li>
        <button className='contact-btn' onClick={()=>{}}>Download CV</button>

    </ul>
    </div>
    </div>
    </>
  )
}

