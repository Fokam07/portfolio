import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simule l'envoi du formulaire
    console.log('Formulaire soumis:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact scroll-reveal">
      <div className="contact-container">
        <div className="section-header">
          <h2>Me Contacter</h2>
          <p className="section-subtitle">Parlons de vos projets et de vos opportunités</p>
          <div className="header-line"></div>
        </div>

        <div className="contact-content">
          <div className="contact-form scroll-reveal">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Votre nom"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="votre@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Votre message..."
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary btn-submit">
                <span className="btn-icon">✉️</span> Envoyer le Message
              </button>

              {submitted && (
                <div className="success-message">
                  ✓ Message envoyé avec succès!
                </div>
              )}
            </form>
          </div>

          <div className="contact-info scroll-reveal">
            <h3>Autres Moyens de Me Contacter</h3>
            
            <div className="contact-methods">
              <a href="https://www.linkedin.com/in/prince-fokam-9bb412369" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="contact-icon">💼</span>
                <div>
                  <p className="contact-label">LinkedIn</p>
                  <p className="contact-value">Prince Orland FOKAM</p>
                </div>
              </a>

              <a href="https://github.com/Fokam07" target="_blank" rel="noopener noreferrer" className="contact-method">
                <span className="contact-icon">💻</span>
                <div>
                  <p className="contact-label">GitHub</p>
                  <p className="contact-value">Fokam07</p>
                </div>
              </a>

              <a href="mailto:fokamprince39@gmail.com" className="contact-method">
                <span className="contact-icon"></span>
                <div>
                  <p className="contact-label">Email</p>
                  <p className="contact-value">fokamprince39@gmail.com</p>
                </div>
              </a>

              <a href="tel:+33784755834" className="contact-method">
                <span className="contact-icon">📱</span>
                <div>
                  <p className="contact-label">Téléphone</p>
                  <p className="contact-value">+33 7 84 75 58 34</p>
                </div>
              </a>
            </div>

            <div className="response-time">
              <p>Je vous réponds généralement sous 24h</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
