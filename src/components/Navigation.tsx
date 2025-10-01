import React, { useState } from 'react';
import './Navigation.css';

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-container">
        {/* Logo */}
        <div className="nav-logo">
          <a href="#home">Portafolio</a>
        </div>

        {/* Menu Items */}
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <a href="#home" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Inicio
            </a>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Sobre Mí
            </a>
          </li>
          <li className="nav-item">
            <a href="#projects" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Proyectos
            </a>
          </li>
          <li className="nav-item">
            <a href="#skills" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Habilidades
            </a>
          </li>
          <li className="nav-item">
            <a href="#contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </a>
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className={`nav-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;