import './About.css';

export default function About() {
  const qualities = [
    { icon: '🧠', title: 'Esprit d\'analyse', desc: 'Résolution de problèmes complexes avec logique' },
    { icon: '🚀', title: 'Autonomie', desc: 'Capable de travailler indépendamment' },
    { icon: '⚙️', title: 'Rigueur', desc: 'Code propre et bien structuré' },
    { icon: '🔍', title: 'Curiosité', desc: 'Toujours en quête d\'apprentissage' },
    { icon: '👥', title: 'Travail en équipe', desc: 'Collaboration et communication fluide' },
    { icon: '🎯', title: 'Adaptation', desc: 'Flexible face aux défis nouveaux' },
  ];

  return (
    <section id="about" className="about scroll-reveal">
      <div className="about-container">
        <div className="section-header">
          <h2>À Propos de Moi</h2>
          <div className="header-line"></div>
        </div>

        <div className="about-content">
          <div className="about-text scroll-reveal">
            <p className="about-intro">
              Étudiant en Mastère spécialisé en développement logiciel, je suis passionné par la création d'applications web modernes, performantes et scalables.
            </p>

            <p className="about-main">
              Mon univers : l'automatisation, l'architecture logicielle, le cloud, et les nouvelles technologies. Je conçois des solutions innovantes qui allient excellence technique et expérience utilisateur.
            </p>

            <p className="about-vision">
              Mon objectif : rejoindre une équipe dynamique où je peux apporter ma rigueur, ma passion et ma soif d'apprentissage continu pour créer des produits impactants.
            </p>
          </div>

          <div className="qualities-grid scroll-reveal">
            {qualities.map((quality, index) => (
              <div key={index} className="quality-card">
                <div className="quality-icon">{quality.icon}</div>
                <h3>{quality.title}</h3>
                <p>{quality.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
