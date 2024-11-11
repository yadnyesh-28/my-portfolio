import React from 'react'
import './App.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './Components/Navbar'
import { Hero } from './Components/Hero/Hero'
import { Skills } from './Components/Skills/Skills'
import { WorkExperience } from './Components/WorkExperience/WorkExperience'
import { Contact } from './Components/ContactMe/Contact';
import { Footer } from './Components/Footer/Footer';

export default function App() {
  return (
    <>
      <Navbar />

      <div className='container'>
        <Hero />
        <Skills/>
        <WorkExperience/>
        <Contact/>
      </div>
      <Footer/>
    </>
  )
}
