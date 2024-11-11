import React from 'react'
import './Contact.css'
import { ContactInfoCard } from './ContanctInfoCard/ContactInfoCard'
import { MdMarkEmailRead } from 'react-icons/md'
import { SiGithub } from 'react-icons/si'
import { BsLinkedin } from 'react-icons/bs'
import { ContactForm } from './ContactForm/ContactForm'

export const Contact = () => {
    return (
        <section id='contact' className='contact-container'>
            <h5>Contact Me</h5>
            <div className="contact-content">
                <div style={{ flex: 1 }}>
                    <ContactInfoCard
                        iconUrl={<MdMarkEmailRead />}
                        text="yadnyeshkolpe7507@gmail.com"
                    />
                    <ContactInfoCard
                        iconUrl={<SiGithub />}
                        text="https://github.com/yadnyesh-28"
                    />

                    <ContactInfoCard
                        iconUrl={<BsLinkedin />}
                        text="linkedin.com/in/yadnyesh-kolpe"
                    />
                </div>
                <div style={{ flex: 1 }}>
                    <ContactForm/>
                </div>
            </div>
        </section>

    )
}
