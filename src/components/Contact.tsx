import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  const contactInfo = {
    email: "nayeliloncomilla19@gmail.com",
    phone: "+56 9 30513364",
    location: "Santiago, Chile",
    linkedin: "https://www.linkedin.com/in/nayeliloncomilla/",
    github: "https://github.com/nayeliloncomilla",
    instagram: "https://www.instagram.com/_.m0nster_/z",
    behance: "https://behance.net/nayeli-loncomilla"
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-container">
        {/* Header de la sección */}
        <div className="section-header">
          <h2 className="section-title">¡Trabajemos Juntos!</h2>
          <div className="title-decoration"></div>
          <p className="section-subtitle">
            Hagamos de un proyecto algo increíble...
          </p>
        </div>

        <div className="contact-content">
          {/* Información de contacto */}
          <div className="contact-info-full">
            <div className="contact-card">
              <h3>Contacto</h3>
              <p>Estoy siempre abierta a nuevas oportunidades y colaboraciones emocionantes.</p>
              
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">📧</div>
                  <div className="contact-text">
                    <span className="contact-label">Email</span>
                    <a href={`mailto:${contactInfo.email}`} className="contact-value">
                      {contactInfo.email}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📱</div>
                  <div className="contact-text">
                    <span className="contact-label">Teléfono</span>
                    <a href={`tel:${contactInfo.phone}`} className="contact-value">
                      {contactInfo.phone}
                    </a>
                  </div>
                </div>

                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <span className="contact-label">Ubicación</span>
                    <span className="contact-value">{contactInfo.location}</span>
                  </div>
                </div>
              </div>

              {/* Redes sociales */}
              <div className="social-links">
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                  <span>LinkedIn</span>
                </a>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="social-link github">
                  <span>GitHub</span>
                </a>
                <a href={contactInfo.instagram} target="_blank" rel="noopener noreferrer" className="social-link instagram">
                  <span>Instagram</span>
                </a>
              </div>

              {/* Botón de descarga de CV */}
              <div className="cv-download">
                <a href="/CV_Nayeli_Loncomilla_2025.pdf" download="CV_Nayeli_Loncomilla_2025.pdf" className="btn-cv">
                  <span className="cv-icon">📄</span>
                  Descargar CV
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de disponibilidad */}
        <div className="availability-section">
          <div className="availability-card">
            <div className="availability-status">
              <div className="status-indicator active"></div>
              <span>Disponible para nuevos proyectos</span>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="contact-decoration">
        <div className="deco-heart heart-1">💕</div>
        <div className="deco-heart heart-2">✨</div>
        <div className="deco-heart heart-3">🌸</div>
        <div className="deco-circle contact-circle-1"></div>
        <div className="deco-circle contact-circle-2"></div>
      </div>
    </section>
  );
};

export default Contact;