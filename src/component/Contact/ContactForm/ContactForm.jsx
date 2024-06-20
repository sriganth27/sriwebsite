import React from 'react';
import './ContactForm.css';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import Swal from 'sweetalert2';

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
          Swal.fire({
            icon: 'success',
            title: 'SUCCESS!',
            text: 'Your message has been sent.',
            width: '400px', // Customize width
            heightAuto: false ,// Disable automatic height adjustment
          });
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          Swal.fire({
            icon: 'error',
            title: 'FAILED...',
            text: error.text,
            width: '400px', // Customize width
            heightAuto: false, // Disable automatic height adjustment
          });
        },
      );
  };

  return (
    <div className='contact-form-content'>
        <form ref={form} onSubmit={sendEmail}>
            <div className="name-container">
            <input type='text' name='from_name' placeholder='Name' required/>
           
            </div>
            <input type='email' name='from_email' placeholder='Email' required/>
            <textarea type='text' name='message' placeholder='Message' rows={3} required/>
            <button type='submit'>Send</button>
        </form>
     
    </div>
  );
}

export default ContactForm;
