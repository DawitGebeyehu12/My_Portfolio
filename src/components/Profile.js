import React from 'react';

const Profile = () => {
  return (
    <section id="profile">
      <div className="sectionpic-container">
        <img className="profile-pic" src="/images/profile-pic.jpg" alt="Dawit Gebeyehu" />
      </div>
      <div className="profile-section">
        <p className="sectiontextp1">Hello, I'm</p>
        <h1 className="title">Dawit Gebeyehu</h1>
        <p className="sectiontextp2">Frontend Developer</p>
        <div className="btn-container">
          <button 
            className="btn btn-color-2" 
            onClick={() => window.open('/images/My Resume.pdf')}
          >
            Download CV
          </button>
          <button 
            className="btn btn-color-1" 
            onClick={() => document.getElementById('contact').scrollIntoView()}
          >
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src="/images/linkedin.png"
            alt="LinkedIn"
            className="icon"
            onClick={() => window.open('https://www.linkedin.com/in/dawit-gebeyehu-a5a70a258', '_blank')}
          />
          <img
            src="/images/github.png"
            alt="GitHub"
            className="icon"
            onClick={() => window.open('https://github.com/DawitGebeyehu12', '_blank')}
          />
        </div>
      </div>
    </section>
  );
};

export default Profile;