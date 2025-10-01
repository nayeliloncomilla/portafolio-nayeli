import React from 'react';
import './Skills.css';

const Skills: React.FC = () => {
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90, icon: "⚛️" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "CSS/SCSS", level: 95, icon: "🎨" },
        { name: "HTML5", level: 95, icon: "📝" },
        { name: "Tailwind", level: 80, icon: "💨" }
      ]
    },
    {
      category: "Herramientas",
      skills: [
        { name: "Git", level: 85, icon: "🌿" },
        { name: "Vite", level: 80, icon: "⚡" },
        { name: "Figma", level: 75, icon: "🎨" },
        { name: "VS Code", level: 90, icon: "💻" },
        { name: "npm/yarn", level: 85, icon: "📦" }
      ]
    },
    {
      category: "Soft Skills",
      skills: [
        { name: "Comunicación", level: 90, icon: "💬" },
        { name: "Trabajo en Equipo", level: 95, icon: "🤝" },
        { name: "Creatividad", level: 90, icon: "✨" },
        { name: "Resolución de Problemas", level: 85, icon: "🧩" },
        { name: "Adaptabilidad", level: 90, icon: "🌱" }
      ]
    }
  ];

  return (
    <section className="skills" id="skills">
      <div className="skills-container">
        {/* Header de la sección */}
        <div className="section-header">
          <h2 className="section-title">Mis Habilidades</h2>
          <div className="title-decoration"></div>
          <p className="section-subtitle">
            Tecnologías y competencias que domino para crear experiencias digitales excepcionales
          </p>
        </div>

        {/* Grid de categorías de habilidades */}
        <div className="skills-grid">
          {skillsData.map((category, index) => (
            <div key={index} className="skill-category">
              <h3 className="category-title">{category.category}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="skill-header">
                      <div className="skill-info">
                        <span className="skill-icon">{skill.icon}</span>
                        <span className="skill-name">{skill.name}</span>
                      </div>
                      <span className="skill-percentage">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div 
                        className="skill-progress" 
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Estadísticas adicionales */}
        <div className="stats-section">
          <div className="stat-item">
            <div className="stat-number">15+</div>
            <div className="stat-label">Proyectos Completados</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">2+</div>
            <div className="stat-label">Años de Experiencia</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <div className="stat-label">Dedicación</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">24/7</div>
            <div className="stat-label">Aprendizaje Continuo</div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="skills-decoration">
        <div className="deco-circle circle-1"></div>
        <div className="deco-circle circle-2"></div>
        <div className="deco-circle circle-3"></div>
      </div>
    </section>
  );
};

export default Skills;