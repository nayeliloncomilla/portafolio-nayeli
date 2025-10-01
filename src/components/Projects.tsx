import React from 'react';
import './Projects.css';

const Projects: React.FC = () => {
  const projectsData = [
    {
      id: 1,
      title: "Spa Wellness Landing",
      description: "Landing page elegante para un spa de lujo con diseño minimalista, sistema de reservas online y galería de servicios. Enfoque en UX relajante y colores suaves.",
      image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "TypeScript", "SCSS", "Framer Motion"],
      category: "landing",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
      highlights: ["Animaciones suaves", "Reservas online", "Diseño responsive", "SEO optimizado"]
    },
    {
      id: 2,
      title: "Studio de Fotografía",
      description: "Landing moderna para fotógrafa profesional con portafolio interactivo, galerías filtradas y formulario de contacto para sesiones personalizadas.",
      image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["Next.js", "Tailwind CSS", "Lightbox", "EmailJS"],
      category: "landing",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
      highlights: ["Galería interactiva", "Filtros por categoría", "Contacto directo", "Carga optimizada"]
    },
    {
      id: 3,
      title: "Consultoría Femenina",
      description: "Website profesional para coach de vida especializada en empoderamiento femenino. Incluye blog, testimoniales y calendario de citas online.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      technologies: ["React", "Strapi CMS", "Styled Components", "Calendly API"],
      category: "landing",
      demoUrl: "#",
      codeUrl: "#",
      featured: true,
      highlights: ["Blog integrado", "Testimoniales", "Citas online", "Panel admin"]
    }
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        {/* Header de la sección */}
        <div className="section-header">
          <h2 className="section-title">Mis Proyectos</h2>
          <div className="title-decoration"></div>
          <p className="section-subtitle">
            Una selección de mis trabajos más recientes y proyectos que demuestran mis habilidades
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="projects-grid">
          {projectsData.map(project => (
            <div key={project.id} className={`project-card ${project.featured ? 'featured' : ''}`}>
              <div className="project-image">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="project-img"
                />
                <div className="project-overlay">
                  <div className="project-links">
                    <a href={project.demoUrl} className="project-link demo-link">
                      <span>Ver Demo</span>
                    </a>
                    <a href={project.codeUrl} className="project-link code-link">
                      <span>Ver Código</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title">{project.title}</h3>
                  {project.featured && <span className="featured-badge">Destacado</span>}
                </div>
                
                <p className="project-description">{project.description}</p>
                
                {/* Highlights específicos del proyecto */}
                <div className="project-highlights">
                  {project.highlights?.map((highlight, index) => (
                    <span key={index} className="highlight-item">✨ {highlight}</span>
                  ))}
                </div>
                
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Elementos decorativos */}
      <div className="projects-decoration">
        <div className="deco-element element-1"></div>
        <div className="deco-element element-2"></div>
        <div className="deco-element element-3"></div>
      </div>
    </section>
  );
};

export default Projects;