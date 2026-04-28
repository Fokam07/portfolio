import './CV.css';

export default function CV() {
  return (
    <div id="cv" className="cv-container">
      {/* En-tête */}
      <div className="cv-header">
        <div className="cv-header-content">
          <div className="cv-photo-section">
            <img src="/cvphoto.jpg" alt="Prince Orland FOKAM FOTSO" className="cv-photo" />
          </div>
          
          <div className="cv-header-info">
            <h1>Prince Orland FOKAM FOTSO</h1>
            <p className="cv-search">Recherche d'alternance / Stage de 3 à 4 mois en développement Full Stack / DevOps</p>
            <p className="cv-bio">Étudiant en Mastère spécialisé en développement logiciel, passionné par la création d'applications web modernes, l'automatisation et les technologies cloud.</p>
            
            <div className="cv-contact">
              <span>📧 fokamprince39@gmail.com</span>
              <span>📱 +33 7 84 75 58 34</span>
              <span>🌐 <a href="https://portfolio-five-coral-18.vercel.app" style={{ color: '#3B82F6', textDecoration: 'none', fontWeight: '600' }} target="_blank" rel="noopener noreferrer">portfolio-five-coral-18.vercel.app</a></span>
              <span>🔗 github.com/Fokam07</span>
              <span>💼 linkedin.com/in/prince-fokam-9bb412369</span>
            </div>
          </div>
        </div>
      </div>

      {/* Corps du CV */}
      <div className="cv-body">
        {/* Colonne gauche */}
        <div className="cv-left">
          {/* FORMATIONS */}
          <section className="cv-section">
            <h2 className="cv-section-title"> FORMATIONS</h2>
            
            <div className="cv-item">
              <div className="cv-item-header">
                <h3>Mastère Développement Solutions Logiciel</h3>
                <span className="cv-date">Oct. 2025 - Présent</span>
              </div>
              <p className="cv-location">Keyce Academy, Montpellier - France</p>
              <p className="cv-description">Formation de haut niveau en architecture logicielle et DevOps</p>
              <ul className="cv-skills-list">
                <li>Architecture Système</li>
                <li>Cloud & DevOps</li>
                <li>Leadership Technique</li>
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <h3>Licence Génie Logiciel</h3>
                <span className="cv-date">Oct. 2024 - Août 2025</span>
              </div>
              <p className="cv-location">Keyce Informatique & IA, Douala - Cameroun</p>
              <p className="cv-description">Spécialisation en ingénierie logicielle et technologies émergentes</p>
              <ul className="cv-skills-list">
                <li>Développement Web/Mobile</li>
                <li>Bases de Données</li>
                <li>Intelligence Artificielle</li>
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <h3>DUT Génie Informatique</h3>
                <span className="cv-date">Oct. 2021 - Juil. 2023</span>
              </div>
              <p className="cv-location">IUT, Douala - Cameroun</p>
              <p className="cv-description">Formation complète en technologies informatiques et développement</p>
              <ul className="cv-skills-list">
                <li>Informatique Générale</li>
                <li>Programmation</li>
                <li>Réseaux & Systèmes</li>
              </ul>
            </div>
          </section>

          {/* EXPÉRIENCES */}
          <section className="cv-section">
            <h2 className="cv-section-title">EXPÉRIENCE PROFESSIONNELLE</h2>
            
            <div className="cv-item">
              <div className="cv-item-header">
                <h3>Génie Logiciel</h3>
                <span className="cv-date">Juin 2025 - Août 2025</span>
              </div>
              <p className="cv-location">ASCENA CAMEROUN, Douala - Cameroun</p>
              <p className="cv-description">Développement d'une application intelligente de supervision système</p>
              <ul className="cv-skills-list">
                <li>Application Supervision</li>
                <li>Monitoring Équipements</li>
                <li>Analyse Communications</li>
                <li>Modélisation Système</li>
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <h3>Support Technique & Développement</h3>
                <span className="cv-date">Avr. 2023 - Juin 2023</span>
              </div>
              <p className="cv-location">Commercial Bank, Douala - Cameroun</p>
              <p className="cv-description">Support technique avancé et développement de solutions informatiques</p>
              <ul className="cv-skills-list">
                <li>Modélisation Base de Données</li>
                <li>Migration Équipements</li>
                <li>Mise à Jour RISKBEAC</li>
                <li>Support WORKFLOWS</li>
              </ul>
            </div>

            <div className="cv-item">
              <div className="cv-item-header">
                <h3>Support Bureautique</h3>
                <span className="cv-date">Févr. 2023 - Avr. 2023</span>
              </div>
              <p className="cv-location">NOFERCAM, Douala - Cameroun</p>
              <p className="cv-description">Gestion du support technique et des documents administratifs</p>
              <ul className="cv-skills-list">
                <li>Gestion Documents</li>
                <li>Utilisation Office</li>
                <li>Support Utilisateurs</li>
              </ul>
            </div>
          </section>
        </div>

        {/* Colonne droite */}
        <div className="cv-right">
          {/* COMPÉTENCES TECHNIQUES */}
          <section className="cv-section">
            <h2 className="cv-section-title">⚙️ COMPÉTENCES</h2>
            
            <div className="cv-skill-category">
              <h4>Frontend</h4>
              <div className="cv-skill-tags">
                <span>React</span>
                <span>TypeScript</span>
                <span>Tailwind CSS</span>
                <span>Next.js</span>
                <span>Angular</span>
              </div>
            </div>

            <div className="cv-skill-category">
              <h4>Backend</h4>
              <div className="cv-skill-tags">
                <span>Node.js</span>
                <span>Nest.js</span>
                <span>Express.js</span>
                <span>Laravel</span>
                <span>Symfony</span>
              </div>
            </div>

            <div className="cv-skill-category">
              <h4>Bases de Données</h4>
              <div className="cv-skill-tags">
                <span>PostgreSQL</span>
                <span>MySQL</span>
                <span>MongoDB</span>
                <span>Firebase</span>
              </div>
            </div>

            <div className="cv-skill-category">
              <h4>DevOps & Cloud</h4>
              <div className="cv-skill-tags">
                <span>Docker</span>
                <span>Kubernetes</span>
                <span>AWS</span>
                <span>GitHub Actions</span>
                <span>CI/CD</span>
              </div>
            </div>

            <div className="cv-skill-category">
              <h4>IA & Autres</h4>
              <div className="cv-skill-tags">
                <span>Python</span>
                <span>OpenAI API</span>
                <span>Git</span>
                <span>Linux</span>
                <span>Postman</span>
              </div>
            </div>
          </section>

          {/* QUALITÉS */}
          <section className="cv-section">
            <h2 className="cv-section-title"> QUALITÉS</h2>
            <div className="cv-qualities">
              <div className="cv-quality">
                <span className="cv-quality-icon"></span>
                <div>
                  <p className="cv-quality-title">Esprit d'analyse</p>
                  <p className="cv-quality-desc">Résolution de problèmes complexes</p>
                </div>
              </div>
              <div className="cv-quality">
                <span className="cv-quality-icon"></span>
                <div>
                  <p className="cv-quality-title">Autonomie</p>
                  <p className="cv-quality-desc">Travail indépendant et efficace</p>
                </div>
              </div>
              <div className="cv-quality">
                <span className="cv-quality-icon"></span>
                <div>
                  <p className="cv-quality-title">Rigueur</p>
                  <p className="cv-quality-desc">Code propre et bien structuré</p>
                </div>
              </div>
              <div className="cv-quality">
                <span className="cv-quality-icon"></span>
                <div>
                  <p className="cv-quality-title">Travail en équipe</p>
                  <p className="cv-quality-desc">Collaboration fluide</p>
                </div>
              </div>
            </div>
          </section>

          {/* DISPONIBILITÉ */}
          <section className="cv-section">
            <h2 className="cv-section-title"> DISPONIBILITÉ</h2>
            <div className="cv-availability">
              <p><strong>Statut:</strong> Immédiate</p>
              <p><strong>Localisation:</strong> Mobile en France</p>
              <p><strong>Type de contrat:</strong> Alternance ou Stage 3-4 mois</p>
            </div>
          </section>
        </div>
      </div>

      {/* Footer CV */}
      <div className="cv-footer">
        <p>Prince Orland FOKAM FOTSO | Développeur Full Stack | DevOps</p>
        <p>Email: fokaprince39@gmail.com | Téléphone: +33 7 84 75 58 34</p>
      </div>
    </div>
  );
}
