import React, { useState } from 'react';
import './navbar.css';
import {  IoLogoXing  } from "react-icons/io"
import {  IoMenuOutline } from "react-icons/io5";
import { MobileNav } from './MobileNav/MobileNav';


export default function Navbar() {

    const[openMenu, setOpenMenu]= useState(false);

    const toggleMenu=()=>{
      setOpenMenu(!openMenu);
    }


  return (
    <>
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
    
     <nav className="nav-wrapper">
      <div className="nav-content">
        <a href="#">
      <IoLogoXing  className="logo" /></a>
       <ul>
        <li><a href='#hero' className='menu-items'>Home</a></li>
        <li><a href='#skills' className='menu-items'>Skills</a></li>
        <li><a href='#workExperience' className='menu-items'>Work Experience</a></li>
        <li><a href='#contact' className='menu-items'>Contact Me</a></li>

        <button className='contact-btn' onClick={()=>{}}>Download CV</button>

       </ul>

        <button className='menu-btn' onClick={toggleMenu}>
          
          <span 
          class={"material-symbols-outlined"}
          style={{fontSize : "1.8rem"}}
          ><IoMenuOutline/>
          {openMenu ? "" : " "}
          </span>
        </button>

      </div>
    </nav>
    </>
  )
}






