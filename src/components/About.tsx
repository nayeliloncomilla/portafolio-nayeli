import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        {/* Título de la sección */}
        <div className="section-header">
          <h2 className="section-title">Sobre Mí</h2>
          <div className="title-decoration"></div>
          <p className="section-subtitle">Conoce un poco más sobre mi historia y pasión</p>
        </div>

        <div className="about-content">
          {/* Imagen personal */}
          <div className="about-image">
            <div className="image-wrapper">
              <img 
                src="/img 3.jpg" 
                alt="Nayeli - Sobre mí"
                className="about-photo"
              />
              <div className="image-decoration decoration-1"></div>
              <div className="image-decoration decoration-2"></div>
            </div>
          </div>

          {/* Contenido de texto */}
          <div className="about-text">
            <div className="about-story">
              <h3>Mi Historia</h3>
              <p>
                Soy una desarrolladora frontend apasionada por crear experiencias digitales que no solo 
                sean funcionales, sino también hermosas y accesibles. Mi viaje en el mundo de la 
                programación comenzó con la curiosidad de entender cómo funcionan las aplicaciones 
                que uso todos los días.
              </p>
              <p>
                Con cada proyecto, busco combinar creatividad y técnica para desarrollar soluciones 
                que realmente impacten la vida de las personas. Me especializo en crear interfaces 
                intuitivas y responsive que conecten con los usuarios.
              </p>
            </div>

            <div className="about-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">🎯</div>
                <div className="highlight-content">
                  <h4>Enfoque al Detalle</h4>
                  <p>Cada pixel cuenta. Me enfoco en los detalles que hacen la diferencia.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">💡</div>
                <div className="highlight-content">
                  <h4>Soluciones Creativas</h4>
                  <p>Busco enfoques innovadores para resolver problemas complejos.</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">🤝</div>
                <div className="highlight-content">
                  <h4>Colaboración</h4>
                  <p>Creo en el poder del trabajo en equipo y la comunicación efectiva.</p>
                </div>
              </div>
            </div>

            <div className="about-cta">
              <a href="#contact" className="btn-about">Trabajemos Juntos</a>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos de fondo */}
      <div className="about-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>
    </section>
  );
};

export default About;