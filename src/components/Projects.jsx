import './Projects.css';

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Marketplace E-commerce DROPP',
      description: 'Plateforme e-commerce complète avec panier, paiement et gestion d\'inventaire.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
      image: '/dropp.png',
      link: '',
      github: 'https://github.com/Fokam07/DROPP'
    },
    {
      id: 2,
      title: 'Memotec - Supervision',
      description: 'Dashboard de monitoring en temps réel pour infrastructure Memotec',
      stack: ['Bash', 'Python', 'Docker', 'Kubernetes'],
      link: '',
      image: '/memotec.png',
      github: 'https://github.com/Fokam07/memotec-supervision'
    },
    {
      id: 3,
      title: 'Plateforme de ecommerce Produit digital MZSTREAM',
      description: 'Vente de produits digitaux  (ebooks, formations, streaming)',
      stack: ['Next.js', 'Nest.js', 'PostgreSQL'],
      image: '/mzstream.jpg',
      github: 'https://github.com/Fokam07/MZSTREAM'
    },
    {
      id: 4,
      title: 'NovaCare',
      description: 'application de gestion de cabinet médical avec prise de rendez-vous en ligne et dossiers patients sécurisés.',
      stack: ['React', 'Node.js', 'PostgreSQL', 'Docker'],
      image: '/novacare.png',
      github: 'https://github.com/Fokam07/NovaCare'
    },
    {
      id: 5,
      title: 'chat-app',
      description: 'chat-app est une application de messagerie avec IA intégrée pour des réponses intelligentes et une expérience utilisateur améliorée et generations des CV',
      stack: ['JavaScript', 'TypeScript', 'PostgreSQL'],
      image: '',
      link: '',
      github: 'https://github.com/Fokam07/NextJscours'
    },
    {
      id: 6,
      title: 'SYMFOCONNECT',
      description: 'Reseau social pour les développeurs Symfony, avec partage de projets, discussions techniques et événements communautaires.',
      stack: ['Symfony', 'MySQL', 'Docker'],
      image: '',
      link: '#',
      github: 'https://github.com/Fokam07/SYMFONYCONNECT'
    }
  ];

  return (
    <section id="projects" className="projects scroll-reveal">
      <div className="projects-container">
        <div className="section-header">
          <h2>Mes Projets</h2>
          <p className="section-subtitle">Une sélection de projets démontrant mon expertise</p>
          <div className="header-line"></div>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card scroll-reveal">
              <div className="project-image">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="project-img" />
                ) : (
                  <span className="project-emoji">📱</span>
                )}
                <div className="project-overlay">
                  <a href={project.github} className="project-btn github-btn">
                    <span>💻</span> GitHub
                  </a>
                </div>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-stack">
                  {project.stack.map((tech, techIndex) => (
                    <span key={techIndex} className="stack-badge">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
