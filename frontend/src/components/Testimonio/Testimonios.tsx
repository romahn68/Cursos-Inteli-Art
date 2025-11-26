import React, { useState, useEffect } from 'react';
import ApiService, { Testimonio } from '../../utils/ApiService';

const Testimonios: React.FC = () => {
  const [testimonios, setTestimonios] = useState<Testimonio[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [testimonioActual, setTestimonioActual] = useState(0);

  useEffect(() => {
    const fetchTestimonios = async () => {
      try {
        setLoading(true);
        const data = await ApiService.getTestimonios();
        setTestimonios(data);
        setError(null);
      } catch (err) {
        console.error('Error al cargar testimonios:', err);
        setError('No se pudieron cargar los testimonios.');
        // Fallback a datos locales
        setTestimonios([
          {
            id: 1,
            nombre: "María González",
            contenido: "El curso inicial me ayudó a entender conceptos que parecían complejos. Ahora puedo usar herramientas de IA en mi trabajo diario.",
            curso_relacionado: "IA para Principiantes",
            fecha: "15 Ene 2024"
          },
          {
            id: 2,
            nombre: "Juan Pérez",
            contenido: "Excelente curso 2.0. Aprendí a automatizar tareas repetitivas y ahora soy más eficiente en mi trabajo como diseñador.",
            curso_relacionado: "Herramientas de IA para Productividad",
            fecha: "20 Ene 2024"
          },
          {
            id: 3,
            nombre: "Ana Martínez",
            contenido: "El curso 3.0 superó mis expectativas. Ahora puedo crear páginas web con IA y he mejorado significativamente mi portafolio.",
            curso_relacionado: "IA Aplicada en Diseño y Desarrollo Web",
            fecha: "25 Ene 2024"
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonios();
  }, []);

  const siguienteTestimonio = () => {
    setTestimonioActual((prev) => (prev === testimonios.length - 1 ? 0 : prev + 1));
  };

  const anteriorTestimonio = () => {
    setTestimonioActual((prev) => (prev === 0 ? testimonios.length - 1 : prev - 1));
  };

  if (loading) {
    return (
      <section className="testimonios" id="testimonios">
        <div className="container">
          <h2 className="section-title">Lo que dicen nuestros estudiantes</h2>
          <div className="loading">Cargando testimonios...</div>
        </div>
      </section>
    );
  }

  if (testimonios.length === 0) {
    return null;
  }

  return (
    <section className="testimonios" id="testimonios">
      <div className="container">
        <h2 className="section-title">Lo que dicen nuestros estudiantes</h2>
        {error && (
          <div className="error-message" style={{ color: '#e74c3c', marginBottom: '1rem', fontSize: '0.9rem' }}>
            {error}
          </div>
        )}
        <div className="testimonios-contenedor">
          <button
            className="btn-nav btn-anterior"
            onClick={anteriorTestimonio}
            aria-label="Testimonio anterior"
          >
            &lt;
          </button>

          <div className="testimonio-actual">
            <div className="testimonio-card">
              <div className="testimonio-encabezado">
                <div className="testimonio-usuario">
                  <div className="testimonio-imagen">
                    <span>{testimonios[testimonioActual].nombre.charAt(0)}</span>
                  </div>
                  <div className="testimonio-datos">
                    <h4>{testimonios[testimonioActual].nombre}</h4>
                    <p className="testimonio-curso">{testimonios[testimonioActual].curso_relacionado}</p>
                  </div>
                </div>
              </div>

              <p className="testimonio-texto">"{testimonios[testimonioActual].contenido}"</p>

              <div className="testimonio-fecha">
                {testimonios[testimonioActual].fecha}
              </div>
            </div>
          </div>

          <button
            className="btn-nav btn-siguiente"
            onClick={siguienteTestimonio}
            aria-label="Siguiente testimonio"
          >
            &gt;
          </button>
        </div>

        <div className="indicadores">
          {testimonios.map((_, index) => (
            <button
              key={index}
              className={`indicador ${index === testimonioActual ? 'activo' : ''}`}
              onClick={() => setTestimonioActual(index)}
              aria-label={`Ir al testimonio ${index + 1}`}
            >
              <span></span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonios;