import './Skills.css';

export default function Skills() {
  const skills = [
    {
      category: 'Frontend',
      icon: '🎨',
      techs: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Angular', 'Next.js', 'Tailwind CSS']
    },
    {
      category: 'Backend',
      icon: '⚙️',
      techs: ['Nest.js', 'Express.js', 'Java', 'Spring Boot', 'Symfony', 'Laravel', 'FastAPI', 'C']
    },
    {
      category: 'Bases de Données',
      icon: '🛢️',
      techs: ['MySQL', 'PostgreSQL']
    },
    {
      category: 'DevOps & Cloud',
      icon: '☁️',
      techs: ['Docker', 'Kubernetes', 'GitHub Actions', 'CI/CD', 'Linux']
    },
    {
      category: 'IA & Automatisation',
      icon: '🤖',
      techs: ['LLM', 'Python IA Tools', 'Machine Learning']
    },
    {
      category: 'Design & Conception',
      icon: '📐',
      techs: ['MERISE', 'UML', 'BPMN']
    },
    {
      category: 'Outils & Plateformes',
      icon: '🔧',
      techs: ['Git', 'GitHub', 'Postman', 'Swagger', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="skills scroll-reveal">
      <div className="skills-container">
        <div className="section-header">
          <h2>Mes Compétences</h2>
          <div className="header-line"></div>
        </div>

        <div className="skills-grid">
          {skills.map((skillGroup, index) => (
            <div key={index} className="skill-card scroll-reveal">
              <div className="skill-header">
                <span className="skill-icon">{skillGroup.icon}</span>
                <h3>{skillGroup.category}</h3>
              </div>
              <div className="tech-tags">
                {skillGroup.techs.map((tech, techIndex) => (
                  <span key={techIndex} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
