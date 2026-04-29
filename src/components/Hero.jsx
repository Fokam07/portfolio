import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero scroll-reveal">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge scroll-reveal">
            <span className="badge-icon">⚡</span>
            <span>Full Stack Developer | DevOps</span>
          </div>

          <h1 className="hero-title scroll-reveal">
            Je conçois des applications 
            <span className="gradient-text"> performantes, modernes et évolutives</span>
          </h1>

          <p className="hero-subtitle scroll-reveal">
            Développeur Full Stack passionné par le Web, le DevOps, le Cloud et l'Intelligence Artificielle. Étudiant en Mastère spécialisé à la recherche d'une alternance ou d'un stage de 3 à 4 mois.
          </p>

          <div className="hero-buttons scroll-reveal">
            <button className="btn btn-primary" onClick={() => {
              const link = document.createElement('a');
              link.href = '/CV_Prince_Orland_FOKAM.pdf';
              link.download = 'CV_Prince_Orland_FOKAM.pdf';
              link.click();
            }}>
              <span className="btn-icon">📄</span> Télécharger mon CV
            </button>
            <button className="btn btn-secondary" onClick={() => {
              document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
            }}>
              <span className="btn-icon">🚀</span> Voir mes projets
            </button>
          </div>

          <div className="hero-stats scroll-reveal">
            <div className="stat">
              <span className="stat-number">10+</span>
              <span className="stat-label">Projets réalisés</span>
            </div>
            <div className="stat">
              <span className="stat-number">15+</span>
              <span className="stat-label">Technologies</span>
            </div>
            <div className="stat">
              <span className="stat-number">∞</span>
              <span className="stat-label">Passion</span>
            </div>
          </div>
        </div>

        <div className="hero-visual scroll-reveal">
          <div className="avatar-container">
            <div className="avatar">
              <img 
                src="/cvphoto.jpg" 
                alt="Prince Orland FOKAM FOTSO"
                className="avatar-image"
              />
            </div>
            <div className="avatar-glow"></div>
          </div>
          
          <div className="floating-cards">
            <div className="float-card card-1">
              <span className="card-emoji">⚙️</span>
              <span className="card-text">Backend</span>
            </div>
            <div className="float-card card-2">
              <span className="card-emoji">🎨</span>
              <span className="card-text">Frontend</span>
            </div>
            <div className="float-card card-3">
              <span className="card-emoji">☁️</span>
              <span className="card-text">DevOps</span>
            </div>
            <div className="float-card card-4">
              <span className="card-emoji">🤖</span>
              <span className="card-text">IA</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <span>Découvrez mon univers</span>
        <div className="scroll-arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </section>
  );
}
