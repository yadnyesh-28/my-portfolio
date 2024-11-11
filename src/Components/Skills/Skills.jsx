import React, { useState } from 'react'
import './Skills.css'
import { SkillCard } from './SkillCard'
import { Data } from '../../utils/data'
import { SkillInfoCard } from './SkillInfoCard'

export const Skills = () => {

  const[selectedSkill , setselectedSkill]= useState(Data[0]);

  const handleSelectSkill =(data) =>{
    setselectedSkill(data);
  };


  return (
    <section id='skills' className='skills-container'>
        <h5>Technical Proficiency</h5>

        <div className="skills-content">
            <div className="skills">
                {Data.map((item)=>(
                    <SkillCard 
                    key={item.title}
                    iconUrl={item.icon}
                    title={item.title}
                    isActive={selectedSkill.title === item.title}
                    onClick={()=>{
                      handleSelectSkill(item);
                    }}
                    />
                ))}
            </div>

            <div className="skills-info">
              <SkillInfoCard
                heading={selectedSkill.title}
                skills={selectedSkill.skills}
              />
            </div>
        </div>
    </section>
  )
}
