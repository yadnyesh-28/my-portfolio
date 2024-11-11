import React from 'react'
import './ContactForm.css'

export const ContactForm = () => {
  return (
    <div className='contact-form-content'>
        <form>
            <div className="name-container">
                <input type="text" name='firstName' placeholder='First Name' />
                <input type="text" name='laststName' placeholder='Last Name' />
            </div>
            <input type="email" name='email' placeholder='Email Id' />
            <textarea type="text" name='message' placeholder='Message' rows={3}/>
            <button>Send</button>
        </form>
    </div>
  )
}
