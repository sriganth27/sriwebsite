import React from 'react'
import './ContactForm.css'

import emailjs from '@emailjs/browser';
import { useRef } from 'react';

function ContactForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ap6e91g', 'template_6nart5p', form.current, {
        publicKey: 'wo8lqH02bHfW06Xay',
      })
      .then(
        () => {
          alert('SUCCESS! Your message has been sent.');
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          alert('FAILED... ' + error.text);
        },
      );
  };
  return (
    <div className='contact-form-content'>
        <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
            <input type='text' name='from_name' placeholder='Name' />
           
            </div>
            <input type='email' name='from_email' placeholder='Email' />
            <textarea type='text' name='message' placeholder='Message' rows={3} />
            <button type='submit'>Send</button>
        </form>
     
    </div>
  )
}

export default ContactForm
