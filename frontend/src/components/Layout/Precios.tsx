import React from 'react';

interface Precio {
  id: number;
  nivel: string;
  descripcion: string;
  precio: number;
  duracion: string;
  beneficios: string[];
}

const Precios: React.FC = () => {
  const precios: Precio[] = [
    {
      id: 1,
      nivel: "Inicial 1.0",
      descripcion: "Curso para principiantes",
      precio: 80.00,
      duracion: "8 horas",
      beneficios: [
        "Introducción a la IA",
        "Herramientas básicas",
        "Certificado de participación",
        "Acceso a recursos adicionales"
      ]
    },
    {
      id: 2,
      nivel: "Intermedio 2.0",
      descripcion: "Herramientas para productividad",
      precio: 120.00,
      duracion: "12 horas",
      beneficios: [
        "Técnicas de automatización",
        "Integración con herramientas de oficina",
        "Casos prácticos reales",
        "Soporte post-curso"
      ]
    },
    {
      id: 3,
      nivel: "Avanzado 3.0",
      descripcion: "Diseño y desarrollo web",
      precio: 200.00,
      duracion: "20 horas",
      beneficios: [
        "Proyectos prácticos",
        "Tutoría personalizada",
        "Acceso perpetuo a contenido",
        "Certificación oficial"
      ]
    }
  ];

  return (
    <section className="precios">
      <div className="container">
        <h2 className="section-title">Precios y Planes</h2>
        <div className="precios-grid">
          {precios.map(precio => (
            <div key={precio.id} className={`precio-card ${precio.id === 2 ? 'destacado' : ''}`}>
              {precio.id === 2 && <div className="mejor-valor">¡Mejor valor!</div>}
              <h3>{precio.nivel}</h3>
              <p className="descripcion">{precio.descripcion}</p>
              <div className="precio">
                <span className="importe">€{precio.precio.toFixed(2)}</span>
                <span className="duracion">por {precio.duracion}</span>
              </div>
              <ul className="beneficios">
                {precio.beneficios.map((beneficio, index) => (
                  <li key={index}>{beneficio}</li>
                ))}
              </ul>
              <button className="btn btn-primary">Inscribirse ahora</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Precios;