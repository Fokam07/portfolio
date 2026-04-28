import './Availability.css';

export default function Availability() {
  return (
    <section id="availability" className="availability scroll-reveal">
      <div className="availability-container">
        <div className="availability-card scroll-reveal">
          <div className="availability-header">
            <h2>🚀 Disponibilité & Mobilité</h2>
          </div>

          <div className="availability-grid">
            <div className="availability-item">
              <div className="item-icon">⏱️</div>
              <h3>Disponibilité</h3>
              <p>Immédiate</p>
            </div>

            <div className="availability-item">
              <div className="item-icon">📍</div>
              <h3>Localisation</h3>
              <p>Mobile en France</p>
            </div>

            <div className="availability-item">
              <div className="item-icon">📄</div>
              <h3>Type de Contrat</h3>
              <p>Alternance ou Stage 3-4 mois</p>
            </div>
          </div>

          <div className="availability-highlight">
            <p>Prêt à apporter mon expertise technique et ma motivation à votre équipe ! 💪</p>
          </div>
        </div>
      </div>
    </section>
  );
}
