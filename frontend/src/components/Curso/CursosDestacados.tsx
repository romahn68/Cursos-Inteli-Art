import React, { useState, useEffect } from 'react';
import ApiService, { Curso } from '../../utils/ApiService';

const CursosDestacados: React.FC = () => {
  const [cursos, setCursos] = useState<Curso[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCursos = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getCursos();
        setCursos(data);
        setError(null);
      } catch (err) {
        console.error('Error al cargar cursos:', err);
        setError('No se pudieron cargar los cursos. Por favor, intenta de nuevo más tarde.');
        // Fallback a datos locales si falla la API
        setCursos([
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
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchCursos();
  }, []);

  if (loading) {
    return (
      <section className="cursos-destacados" id="cursos">
        <div className="container">
          <h2 className="section-title">Nuestros Cursos</h2>
          <div className="loading">Cargando cursos...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="cursos-destacados" id="cursos">
      <div className="container">
        <h2 className="section-title">Nuestros Cursos</h2>
        {error && (
          <div className="error-message" style={{ color: '#e74c3c', marginBottom: '1rem' }}>
            {error}
          </div>
        )}
        <div className="cursos-grid">
          {cursos.map(curso => (
            <div key={curso.id} className="curso-card">
              <div className="curso-etiqueta">{curso.nivel}</div>
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
              <ul className="curso-info">
                <li>Duración: {curso.duracion}</li>
                <li>Nivel: {curso.nivel_dificultad}</li>
              </ul>
              <button className="btn btn-secondary">Más información</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CursosDestacados;