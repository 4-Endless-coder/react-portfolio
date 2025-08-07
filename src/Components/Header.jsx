import React, { useState, useEffect } from 'react';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Handle scroll effect for sticky header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const isDark = savedTheme === 'dark';
    setIsDarkMode(isDark);
    
    if (isDark) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when link is clicked
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Toggle dark/light mode
  const toggleTheme = () => {
    const newIsDarkMode = !isDarkMode;
    setIsDarkMode(newIsDarkMode);
    
    if (newIsDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
    }
  };

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
    
    closeMenu(); // Close mobile menu after clicking
  };

  return (
    <header className={isScrolled ? 'sticky' : ''}>
      <div className="container">
        <nav className="navbar">
          <div className="logo">Portfolio</div>
          
          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li>
              <a 
                href="#home" 
                onClick={(e) => handleSmoothScroll(e, '#home')}
              >
                Home
              </a>
            </li>
            <li>
              <a 
                href="#about" 
                onClick={(e) => handleSmoothScroll(e, '#about')}
              >
                About
              </a>
            </li>
            <li>
              <a 
                href="#skills" 
                onClick={(e) => handleSmoothScroll(e, '#skills')}
              >
                Skills
              </a>
            </li>
            <li>
              <a 
                href="#projects" 
                onClick={(e) => handleSmoothScroll(e, '#projects')}
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, '#contact')}
              >
                Contact
              </a>
            </li>
          </ul>
          
          <div 
            className={`hamburger ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>
          
          {/* Dark & Light mode toggle */}
          <label className="ui-switch">
            <input 
              type="checkbox" 
              id="theme-toggle"
              checked={isDarkMode}
              onChange={toggleTheme}
            />
            <div className="slider">
              <div className="circle"></div>
            </div>
          </label>
        </nav>
      </div>
    </header>
  );
};

export default Header;