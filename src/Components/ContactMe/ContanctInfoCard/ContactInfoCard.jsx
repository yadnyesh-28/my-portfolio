import React from 'react'
import './ContactInfoCard.css'

export const ContactInfoCard = ({iconUrl, text}) => {
  return (
    <div className="contact-details-card">
        <div className="icon">
            <p>{iconUrl}</p>
            {/* <a href={text}>{iconUrl}</a> */}
        </div>

        <p>{text}</p>
    </div>
  )
}
