import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer scroll-reveal">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Prince Orland FOKAM FOTSO</h3>
            <p>Développeur Full Stack | DevOps</p>
            <p className="footer-tagline">Building exceptional digital experiences</p>
          </div>

          <div className="footer-section">
            <h4>Navigation Rapide</h4>
            <ul>
              <li><a href="#hero">Accueil</a></li>
              <li><a href="#about">À Propos</a></li>
              <li><a href="#skills">Compétences</a></li>
              <li><a href="#projects">Projets</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Réseaux Sociaux</h4>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/prince-fokam-9bb412369" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                LinkedIn
              </a>
              <a href="https://github.com/Fokam07" target="_blank" rel="noopener noreferrer" title="GitHub">
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="footer-divider"></div>

        <div className="footer-bottom">
          <p>© {currentYear} Prince Orland FOKAM FOTSO – Built with passion & code.</p>
          <div className="footer-tech">
          </div>
        </div>
      </div>
    </footer>
  );
}
