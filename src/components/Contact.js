import React from 'react';

const Contact = () => {
  return (
    <section id="contact">
      <p className="sectiontextp1">Get in Touch</p>
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img src="./images/email.png" alt="Email icon" className="icon contact-icon email-icon" />
          <p><a href="mailto:dawitgebeyehu08@gmail.com">dawitgebeyehu08@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img src="./images/linkedin.png" alt="LinkedIn icon" className="icon contact-icon" />
          <p><a href="https://www.linkedin.com/in/dawit-gebeyehu-a5a70a258" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;