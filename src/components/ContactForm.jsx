import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import "../style css/Contact.css";

export default function ContactForm() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_bo8q5wm', 'template_lk8wb59', form.current, {
        publicKey: 'oceq10uvBu_Fmcvxu',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="container">      
      <form ref={form} onSubmit={sendEmail}>
        <label>First Name</label>
        <input 
          type="text"
          placeholder="First Name" 
          name="user_name" />
        <label>Last Name</label>  
        <input 
          type="text"
          placeholder="Last Name" 
          name="user_lname" />  
        <label>Email</label>
        <input 
          type="email"
          placeholder="example@yourhost.com" 
          name="user_email" />
        <label>Message</label>
        <textarea 
          className="Message"
          placeholder="The reason ..." 
          name="message" />
        <input
          className="button" 
          type="submit"          
          value="Send" />
      </form>
    </div>

    </>
  );
}