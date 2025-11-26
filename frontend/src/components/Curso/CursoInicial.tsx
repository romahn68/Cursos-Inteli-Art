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

const CursoInicial: React.FC = () => {
  const curso: CursoDetalle = {
    titulo: "IA para Principiantes",
    descripcion: "Curso introductorio a la inteligencia artificial para personas sin conocimientos previos",
    nivel: "Inicial 1.0",
    duracion: "8 horas",
    nivel_dificultad: "Básico",
    objetivos: [
      "Comprender qué es la inteligencia artificial y cómo funciona",
      "Identificar aplicaciones de IA en la vida diaria",
      "Utilizar herramientas de IA sin conocimientos técnicos previos",
      "Prepararse para explorar usos más avanzados de la IA"
    ],
    contenido: [
      "Introducción a la IA: historia y conceptos fundamentales",
      "Tipos de inteligencia artificial y casos de uso",
      "Herramientas de IA accesibles para principiantes",
      "Ética y responsabilidad en el uso de la IA",
      "Preparación para niveles más avanzados"
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

export default CursoInicial;