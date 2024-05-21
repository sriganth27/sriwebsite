import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'
function Contact() {
    return (
        <div>
            <section className='contact-container'>
                <h5>Contact Me</h5>
                <div className='contact-content'>
                    <div style={{ flex: 1 }}>
                        <ContactInfoCard
                            iconUrl={"./assets/email-logo.webp"}
                            text={"srivkp2003@gmail.com"}
                        />
                       <ContactInfoCard
                            iconUrl={"./assets/mobile-logo.png"}
                            text={"+91 9787178433"}
                        />
                    </div>
                    <div style={{ flex: 1 }}>
                      <ContactForm />
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Contact
