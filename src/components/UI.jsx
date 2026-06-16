import { useState } from 'react';

const UI = ({ activeSection, setActiveSection }) => {
  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'hobbies', label: 'Hobbies' },
    { id: 'contact', label: 'Contact' },
  ];

  const contentData = {
    home: {
      title: 'Welcome',
      description: 'I am a dedicated biomedical engineer with a passion for developing innovative medical devices and solutions that improve patient outcomes.',
      points: ['Medical Device Design', 'Biomechanics', 'Healthcare Technology', 'Home Chef'],
    },
    projects: {
      title: 'Featured Projects',
      description: 'Innovative biomedical engineering solutions that make a real difference.',
      points: ['Portable Diagnostic Device', 'Prosthetic Limb Design', 'Patient Monitoring System', 'Surgical Instruments'],
    },
    skills: {
      title: 'Technical Skills',
      description: 'Specialized expertise in medical device design and healthcare technology.',
      points: ['Design & Modeling', 'Medical Knowledge', 'Programming', 'Lab & Testing'],
    },
    hobbies: {
      title: 'Culinary Passion',
      description: 'Cooking is my creative outlet where I explore cuisines from around the world.',
      points: ['International Cuisine', 'Farm-to-Table Cooking', 'Molecular Gastronomy', 'Baking & Pastry Arts'],
    },
    contact: {
      title: 'Get In Touch',
      description: 'Interested in discussing projects or opportunities? I\'d love to hear from you!',
      points: ['Email Me', 'LinkedIn Profile', 'GitHub Repository', 'Let\'s Connect'],
    },
  };

  const currentContent = contentData[activeSection];

  return (
    <div className="ui-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo">🧬 BioEng 3D</div>
        <ul className="nav-links">
          {sections.map((section) => (
            <a
              key={section.id}
              className={activeSection === section.id ? 'active' : ''}
              onClick={() => setActiveSection(section.id)}
            >
              {section.label}
            </a>
          ))}
        </ul>
      </nav>

      {/* Content Panel */}
      <div className="content-panel">
        <h2>{currentContent.title}</h2>
        <p>{currentContent.description}</p>
        <ul>
          {currentContent.points.map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>

      {/* Info Panel */}
      <div className="info-panel">
        <h3>Quick Info</h3>
        {activeSection === 'home' && (
          <>
            <p><strong>Role:</strong> Biomedical Engineer</p>
            <p><strong>Passion:</strong> Medical Devices</p>
            <p><strong>Hobby:</strong> Culinary Arts</p>
          </>
        )}
        {activeSection === 'projects' && (
          <>
            <p><strong>Projects:</strong> 4+ Major</p>
            <p><strong>Focus:</strong> Innovation</p>
            <p><strong>Status:</strong> Active</p>
          </>
        )}
        {activeSection === 'skills' && (
          <>
            <div style={{ marginTop: '10px' }}>
              <span className="skill-badge">SolidWorks</span>
              <span className="skill-badge">Python</span>
              <span className="skill-badge">FEA</span>
              <span className="skill-badge">LabVIEW</span>
              <span className="skill-badge">CAD</span>
            </div>
          </>
        )}
        {activeSection === 'hobbies' && (
          <>
            <p><strong>Chef Specialties:</strong></p>
            <span className="skill-badge">🌍 International</span>
            <span className="skill-badge">🍽️ Farm-to-Table</span>
            <span className="skill-badge">🧪 Molecular</span>
          </>
        )}
        {activeSection === 'contact' && (
          <>
            <p><strong>Get In Touch:</strong></p>
            <p>📧 Email</p>
            <p>💼 LinkedIn</p>
            <p>💻 GitHub</p>
          </>
        )}
      </div>

      {/* Scroll Hint */}
      <div className="scroll-hint">
        <p>↻ Rotate</p>
        <p>Drag to Explore</p>
      </div>
    </div>
  );
};

export default UI;
