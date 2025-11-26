import React from 'react';

interface CursoDetalle {
  titulo: string;
  descripcion: string;
  nivel: string;
  duracion: string;
  nivel_dificultad: string;
  objetivos: string[];
  contenido: string[];
}

const CursoAvanzado: React.FC = () => {
  const curso: CursoDetalle = {
    titulo: "IA Aplicada en Diseño y Desarrollo Web",
    descripcion: "Aprovecha la IA para crear diseños, páginas web y soluciones avanzadas",
    nivel: "Avanzado 3.0",
    duracion: "20 horas",
    nivel_dificultad: "Avanzado",
    objetivos: [
      "Crear diseños únicos con ayuda de IA",
      "Desarrollar páginas web completas con IA",
      "Implementar soluciones personalizadas usando IA",
      "Evaluar y mejorar continuamente tus creaciones con IA"
    ],
    contenido: [
      "Diseño UI/UX con IA: herramientas y técnicas",
      "Generación de código con asistentes de IA",
      "Creación de contenido dinámico con IA",
      "Implementación de IA en aplicaciones web",
      "Optimización y personalización de experiencias de usuario"
    ]
  };

  return (
    <div className="curso-detalle">
      <div className="curso-header">
        <span className="curso-nivel">{curso.nivel}</span>
        <h2>{curso.titulo}</h2>
        <p className="curso-descripcion">{curso.descripcion}</p>
      </div>
      
      <div className="curso-info">
        <div className="info-item">
          <strong>Duración:</strong> {curso.duracion}
        </div>
        <div className="info-item">
          <strong>Nivel:</strong> {curso.nivel_dificultad}
        </div>
      </div>
      
      <div className="curso-contenido">
        <div className="contenido-objetivos">
          <h3>Objetivos del curso</h3>
          <ul>
            {curso.objetivos.map((obj, index) => (
              <li key={index}>{obj}</li>
            ))}
          </ul>
        </div>
        
        <div className="contenido-programa">
          <h3>Contenido del programa</h3>
          <ol>
            {curso.contenido.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default CursoAvanzado;