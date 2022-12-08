import React, { useRef } from 'react';
//npm install @emailjs/browser
import emailjs from '@emailjs/browser';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//npm install --save @fortawesome/free-brands-svg-icons
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { emailJsConfig } from './credentials/Credentials';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    if (document.getElementById('user_name').value && document.getElementById('user_email').value && document.getElementById('message').value) {
        emailjs.sendForm(emailJsConfig.serviceName, emailJsConfig.templateId, form.current, emailJsConfig.publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        document.getElementById('user_name').value = "";
        document.getElementById('user_email').value = "";
        document.getElementById('message').value = "";
    }
  };

  return (
    <section id="contact" className='contact'>
    <h2>Contact</h2>
        <div className="contactInfo">
            <div className="contactInfo-info">
                <div className="contactInfo-txt">
                    Wil je meer weten over mijn huidige werk of waar ik mijzelf in de nabije toekomst zie? Neem dan gerust contact met mij op via het contactformulier of via LinkedIn.
                    <div className="contactInfo-btns">
                        <a href="https://www.linkedin.com/in/erwinpels" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} /> 
                        </a> 
                        <a href="https://www.github.com/3-rwin/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faGithub} /> 
                        </a>
                    </div>
                </div>
            </div>
            <form ref={form} onSubmit={sendEmail}>
            <input type="text" id="user_name" name="user_name" placeholder='Naam' />
            <input type="email" id="user_email" name="user_email" placeholder='Emailadres'/>
            <textarea id="message" name="message" placeholder='Bericht'/>
            <input type="submit" value="Versturen" />
            </form>
        </div>
    </section>
    
  );
};