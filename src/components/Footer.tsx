import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Mensaje personal */}
        <div className="footer-message">
          <p>Hecho con 💕 y mucho café en Santiago, Chile</p>
        </div>

        {/* Copyright y enlaces rápidos */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; {currentYear} Nayeli Loncomilla. Todos los derechos reservados.</p>
          </div>

        </div>
      </div>

      {/* Decoración sutil */}
      <div className="footer-decoration">
        <div className="deco-dot dot-1"></div>
        <div className="deco-dot dot-2"></div>
        <div className="deco-dot dot-3"></div>
      </div>
    </footer>
  );
};

export default Footer;