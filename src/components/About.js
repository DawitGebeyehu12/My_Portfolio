import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
          <img src="/images/about-pic.jpg" alt="Profile picture" className="about-pic" />
        </div>
        <div className="about-details-container">
          <div className="about-containers">
            <div className="details-container">
              <img src="/images/education.png" alt="Education icon" className="icon" />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree in software engineering</p>
            </div>
          </div>
          <div className="text-container">
            <p>
            A frontend software engineer who combines creativity with technical expertise, 
            I build engaging web experiences using HTML, CSS, and JavaScript. I specialize in
             creating website with React.js and enhance performance through Next.js. 
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;