import React from 'react';
import '../Styless/Skills.css';

const Skills = () => {
  // Skills data structure
  const skillsData = [
    {
      category: 'Frontend',
      skills: [
        { icon: 'fab fa-html5', name: 'HTML5' },
        { icon: 'fab fa-css3-alt', name: 'CSS3' },
        { icon: 'fab fa-js', name: 'JavaScript' },
        { icon: 'fab fa-bootstrap', name: 'Bootstrap' },
        { icon: 'fab fa-react', name: 'React.Js' }
      ]
    },
    {
      category: 'Backend..Loading',
      skills: [
        { icon: 'fab fa-node-js', name: 'Node.js' },
        { icon: 'fas fa-database', name: 'MongoDB' },
        { icon: 'fas fa-server', name: 'Express' }
      ]
    },
    {
      category: 'Tools',
      skills: [
        { icon: 'fab fa-git-alt', name: 'Git' },
        { icon: 'fab fa-github', name: 'GitHub' },
        { icon: 'fas fa-terminal', name: 'Command Line' }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">My Skills</h2>
        <div className="skills-container">
          {skillsData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category">
              <h3>{category.category}</h3>
              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <i className={skill.icon}></i>
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;