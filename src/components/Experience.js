import React from 'react';

const Experience = () => {
  const skills = [
    { name: "HTML", level: "Experienced" },
    { name: "CSS", level: "Experienced" },
    { name: "JavaScript", level: "Experienced" },
    { name: "React js", level: "Experienced" },
    { name: "Next.js", level: "Intermediate" },
  ];

  return (
    <section id="experience">
      <p className="sectiontextp1">Explore My</p>
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <h2 className="experience-sub-title">Frontend Development</h2>
            <div className="article-container">
              {skills.map((skill, index) => (
                <article key={index}>
                  <img src="./images/checkmark.png" alt="Experience icon" className="icon" />
                  <div>
                    <h3>{skill.name}</h3>
                    <p>{skill.level}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;