import './Navbar.css';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span className="logo-icon">👨‍💻</span>
          <span>Prince Orland FOKAM FOTSO</span>
        </div>

        <button 
          className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li><a onClick={() => scrollToSection('hero')}>Accueil</a></li>
          <li><a onClick={() => scrollToSection('about')}>À Propos</a></li>
          <li><a onClick={() => scrollToSection('skills')}>Compétences</a></li>
          <li><a onClick={() => scrollToSection('projects')}>Projets</a></li>
          <li><a onClick={() => scrollToSection('experience')}>Parcours</a></li>
          <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
        </ul>

        <a href="#contact" className="navbar-cta">Contactez-moi</a>
      </div>
    </nav>
  );
}
