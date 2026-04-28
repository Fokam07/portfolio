import './Experience.css';

export default function Experience() {
  const experiences = [
    // FORMATIONS
    {
      period: 'Oct. 2021 - Juil. 2023',
      title: 'DUT Génie Informatique',
      company: 'IUT, Douala - Cameroun',
      description: 'Formation complète en technologies informatiques et développement.',
      achievements: ['Informatique Générale', 'Programmation', 'Réseaux & Systèmes']
    },
    {
      period: 'Oct. 2024 - Août 2025',
      title: 'Licence Génie Logiciel',
      company: 'Keyce Informatique & IA, Douala - Cameroun',
      description: 'Spécialisation en ingénierie logicielle et technologies émergentes.',
      achievements: ['Développement Web/Mobile', 'Bases de Données', 'Intelligence Artificielle']
    },
    {
      period: 'Oct. 2025 - Présent',
      title: 'Mastère Développement Solutions Logiciel',
      company: 'Keyce Academy, Montpellier - France',
      description: 'Formation de haut niveau en architecture logicielle et DevOps.',
      achievements: ['Architecture Système', 'Cloud & DevOps', 'Leadership Technique']
    },
    // EXPÉRIENCES PROFESSIONNELLES
    {
      period: 'Févr. 2023 - Avr. 2023',
      title: 'Support Bureautique',
      company: 'NOFERCAM, Douala - Cameroun',
      description: 'Gestion du support technique et des documents administratifs.',
      achievements: ['Gestion Documents', 'Utilisation Office', 'Support Utilisateurs']
    },
    {
      period: 'Avr. 2023 - Juin 2023',
      title: 'Support Technique & Développement',
      company: 'Commercial Bank, Douala - Cameroun',
      description: 'Support technique avancé et développement de solutions informatiques.',
      achievements: ['Modélisation BD', 'Migration Équipements', 'Mise à Jour RISKBEAC', 'Support WORKFLOWS']
    },
    {
      period: 'Juin 2025 - Août 2025',
      title: 'Génie Logiciel',
      company: 'ASCENA CAMEROUN, Douala - Cameroun',
      description: 'Développement d\'une application intelligente de supervision système.',
      achievements: ['Application Supervision', 'Monitoring Équipements', 'Analyse Communications', 'Modélisation Système']
    }
  ];

  return (
    <section id="experience" className="experience scroll-reveal">
      <div className="experience-container">
        <div className="section-header">
          <h2>Mon Parcours</h2>
          <div className="header-line"></div>
        </div>

        <div className="timeline">
          {experiences.map((exp, index) => (
            <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'} scroll-reveal`}>
              <div className="timeline-marker"></div>
              
              <div className="timeline-content">
                <span className="timeline-period">{exp.period}</span>
                <h3>{exp.title}</h3>
                <p className="timeline-company">{exp.company}</p>
                <p className="timeline-description">{exp.description}</p>
                
                <div className="timeline-achievements">
                  {exp.achievements.map((achievement, achievementIndex) => (
                    <span key={achievementIndex} className="achievement-tag">
                      ✓ {achievement}
                    </span>
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
