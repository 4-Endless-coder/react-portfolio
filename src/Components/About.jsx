import React from 'react';
import '../Styless/About.css';

const About = () => {
  // About details data
  const aboutDetails = [
    {
      icon: 'fas fa-graduation-cap',
      text: 'Education: BA, Utkal University'
    },
    {
      icon: 'fas fa-briefcase',
      text: 'Experience: 4 years'
    },
    {
      icon: 'fas fa-map-marker-alt',
      text: 'Location: Odisha, Puri, India'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              Hello! I'm a passionate software developer with expertise in
              building responsive and interactive web applications. I enjoy
              turning complex problems into simple, beautiful, and intuitive
              designs.
            </p>
            <p>
              My focus is on creating clean, efficient code and user-friendly
              experiences. I'm constantly learning and exploring new
              technologies to stay at the forefront of web development.
            </p>
            
            <div className="about-details">
              {aboutDetails.map((detail, index) => (
                <div key={index} className="detail-item">
                  <i className={detail.icon}></i>
                  <span>{detail.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;