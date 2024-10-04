import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
 // Import the CSS file

export const ContactUs = () => {
  const form = useRef();
  const [errorMessage, setErrorMessage] = useState('');
  const [buttonText, setButtonText] = useState('Send'); // State for button text

  const sendEmail = (e) => {
    e.preventDefault();

    // Clear previous error messages
    setErrorMessage('');

    const formData = new FormData(form.current);
    const message = formData.get('message').trim();

    // Validate that the message field is not empty
    if (!message) {
      setErrorMessage('Message cannot be empty. Please enter a message.');
      return; // Prevent sending if the message is empty
    }

    emailjs
      .sendForm('service_2pk8q4g', 'template_uosc7rs', form.current, {
        publicKey: 'PjWb5TtgSFSuVKXfl',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset(); // Reset form after successful submission
          setButtonText('Sent'); // Change button text to "Sent"
        },
        (error) => {
          console.log('FAILED...', error.text);
          setErrorMessage('Failed to send message. Please try again later.');
        },
      );
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="from_name" id="name" required />

        <label htmlFor="email">Email</label>
        <input type="email" name="from_email" id="email" required />

        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" required />

        <input type="submit" value={buttonText} className="submit-button" />
      </form>
    </div>
  );
};
