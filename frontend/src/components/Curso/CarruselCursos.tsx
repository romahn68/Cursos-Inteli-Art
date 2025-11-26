import React, { useState } from 'react';

interface Curso {
  id: number;
  titulo: string;
  descripcion: string;
  nivel: string;
  duracion: string;
  nivel_dificultad: string;
}

const CarruselCursos: React.FC = () => {
  const cursos: Curso[] = [
    {
      id: 1,
      titulo: "IA para Principiantes",
      descripcion: "Curso introductorio a la inteligencia artificial para personas sin conocimientos previos",
      nivel: "Inicial 1.0",
      duracion: "8 horas",
      nivel_dificultad: "Básico"
    },
    {
      id: 2,
      titulo: "Herramientas de IA para Productividad",
      descripcion: "Aprende a usar herramientas de IA para mejorar tu productividad como estudiante o profesional",
      nivel: "Intermedio 2.0",
      duracion: "12 horas",
      nivel_dificultad: "Intermedio"
    },
    {
      id: 3,
      titulo: "IA Aplicada en Diseño y Desarrollo Web",
      descripcion: "Aprovecha la IA para crear diseños, páginas web y soluciones avanzadas",
      nivel: "Avanzado 3.0",
      duracion: "20 horas",
      nivel_dificultad: "Avanzado"
    }
  ];

  const [cursoActual, setCursoActual] = useState(0);

  const siguienteCurso = () => {
    setCursoActual((prev) => (prev === cursos.length - 1 ? 0 : prev + 1));
  };

  const anteriorCurso = () => {
    setCursoActual((prev) => (prev === 0 ? cursos.length - 1 : prev - 1));
  };

  return (
    <div className="carrusel-cursos">
      <div className="carrusel-contenido">
        <button className="btn-nav btn-anterior" onClick={anteriorCurso}>
          &lt;
        </button>
        
        <div className="curso-tarjeta">
          <div className="curso-etiqueta">{cursos[cursoActual].nivel}</div>
          <h3>{cursos[cursoActual].titulo}</h3>
          <p>{cursos[cursoActual].descripcion}</p>
          <ul className="curso-info">
            <li>Duración: {cursos[cursoActual].duracion}</li>
            <li>Nivel: {cursos[cursoActual].nivel_dificultad}</li>
          </ul>
        </div>
        
        <button className="btn-nav btn-siguiente" onClick={siguienteCurso}>
          &gt;
        </button>
      </div>
      
      <div className="indicadores">
        {cursos.map((_, index) => (
          <button
            key={index}
            className={`indicador ${index === cursoActual ? 'activo' : ''}`}
            onClick={() => setCursoActual(index)}
          >
            <span></span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default CarruselCursos;