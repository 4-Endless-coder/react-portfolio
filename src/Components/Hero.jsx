import React, { useState, useEffect } from 'react';
import '../Styless/Hero.css';

const Hero = () => {
  const [displayedName, setDisplayedName] = useState('');
  const fullName = 'Ashesh Dash';

  // Typing effect for the name
  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= fullName.length) {
        setDisplayedName(fullName.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Typing speed

    // Cleanup timer on component unmount
    return () => clearInterval(timer);
  }, []);

  // Smooth scroll to section
  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.querySelector(targetId);
    
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70, // Adjust for header height
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Hi, I'm{' '}
            <span className="highlight">
              {displayedName}
              <span className="cursor">|</span>
            </span>
          </h1>
          <h2>Software Developer</h2>
          <p>I build things for the web and solve complex problems.</p>
          
          <div className="cta-buttons">
            <a 
              href="#projects" 
              className="btn primary-btn"
              onClick={(e) => handleSmoothScroll(e, '#projects')}
            >
              View My Work
            </a>
            <a 
              href="#contact" 
              className="btn secondary-btn"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Contact Me
            </a>
          </div>
        </div>
        
        <div className="hero-image">
          <div className="profile-container">
            <img 
              src="/Media/Profile_pic.webp" 
              alt="Ashesh Dash - Software Developer" 
              className="profile-pic" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;