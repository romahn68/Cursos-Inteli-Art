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

const CursoIntermedio: React.FC = () => {
  const curso: CursoDetalle = {
    titulo: "Herramientas de IA para Productividad",
    descripcion: "Aprende a usar herramientas de IA para mejorar tu productividad como estudiante o profesional",
    nivel: "Intermedio 2.0",
    duracion: "12 horas",
    nivel_dificultad: "Intermedio",
    objetivos: [
      "Implementar herramientas de IA en tu rutina diaria",
      "Automatizar tareas repetitivas con IA",
      "Optimizar procesos de estudio o trabajo usando IA",
      "Mejorar la calidad y velocidad de tus entregables"
    ],
    contenido: [
      "Integración de IA en herramientas de productividad (Google, Microsoft 365)",
      "Automatización de tareas con IA: chatbots y asistentes virtuales",
      "IA para la creación y edición de contenidos",
      "IA para investigación y análisis de datos",
      "IA en la gestión de proyectos y planificación"
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

export default CursoIntermedio;