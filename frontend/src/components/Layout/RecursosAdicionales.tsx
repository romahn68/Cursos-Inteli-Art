import React from 'react';

interface Recurso {
  id: number;
  titulo: string;
  descripcion: string;
  categoria: string; // 'guia', 'video', 'herramienta', 'documento'
  url: string;
  nivel: string; // 'inicial', 'intermedio', 'avanzado'
}

const RecursosAdicionales: React.FC = () => {
  const recursos: Recurso[] = [
    {
      id: 1,
      titulo: "Guía de Introducción a la IA",
      descripcion: "Documento con conceptos básicos sobre inteligencia artificial para principiantes",
      categoria: "guia",
      url: "/recursos/guia-intro-ia.pdf",
      nivel: "inicial"
    },
    {
      id: 2,
      titulo: "Video: Ética en IA",
      descripcion: "Conferencia sobre la responsabilidad ética en el uso de inteligencia artificial",
      categoria: "video",
      url: "https://www.youtube.com/watch?v=example",
      nivel: "intermedio"
    },
    {
      id: 3,
      titulo: "Herramienta: Generador de Imágenes",
      descripcion: "Plataforma recomendada para crear imágenes con inteligencia artificial",
      categoria: "herramienta",
      url: "https://example.com",
      nivel: "inicial"
    },
    {
      id: 4,
      titulo: "Curso de Python para IA",
      descripcion: "Curso gratuito de Python enfocado en aplicaciones de inteligencia artificial",
      categoria: "documento",
      url: "/recursos/curso-python-ia.pdf",
      nivel: "intermedio"
    },
    {
      id: 5,
      titulo: "Libro: Fundamentos de Machine Learning",
      descripcion: "Recomendación de libro para profundizar en los fundamentos del aprendizaje automático",
      categoria: "documento",
      url: "/recursos/libro-ml.pdf",
      nivel: "avanzado"
    },
    {
      id: 6,
      titulo: "Video: IA en el Desarrollo Web",
      descripcion: "Tutorial sobre cómo integrar inteligencia artificial en proyectos web",
      categoria: "video",
      url: "https://www.youtube.com/watch?v=example",
      nivel: "avanzado"
    }
  ];

  const getCategoriaIcono = (categoria: string) => {
    switch(categoria) {
      case 'guia': return '📖';
      case 'video': return '🎥';
      case 'herramienta': return '🛠️';
      case 'documento': return '📄';
      default: return '📁';
    }
  };

  const getNivelClase = (nivel: string) => {
    switch(nivel) {
      case 'inicial': return 'nivel-inicial';
      case 'intermedio': return 'nivel-intermedio';
      case 'avanzado': return 'nivel-avanzado';
      default: return '';
    }
  };

  return (
    <section className="recursos-adicionales">
      <div className="container">
        <h2 className="section-title">Recursos Adicionales</h2>
        <p className="section-subtitle">Documentación, guías y herramientas complementarias para tu aprendizaje</p>
        
        <div className="recursos-filtros">
          <button className="filtro-btn activo">Todos</button>
          <button className="filtro-btn">Guías</button>
          <button className="filtro-btn">Videos</button>
          <button className="filtro-btn">Herramientas</button>
          <button className="filtro-btn">Documentos</button>
        </div>
        
        <div className="recursos-grid">
          {recursos.map(recurso => (
            <div key={recurso.id} className={`recurso-card ${getNivelClase(recurso.nivel)}`}>
              <div className="recurso-icono">{getCategoriaIcono(recurso.categoria)}</div>
              <div className="recurso-contenido">
                <h3>{recurso.titulo}</h3>
                <p>{recurso.descripcion}</p>
                <div className="recurso-meta">
                  <span className={`nivel ${getNivelClase(recurso.nivel)}`}>
                    {recurso.nivel.charAt(0).toUpperCase() + recurso.nivel.slice(1)}
                  </span>
                  <span className="categoria">{recurso.categoria}</span>
                </div>
                <a 
                  href={recurso.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Acceder al recurso
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecursosAdicionales;