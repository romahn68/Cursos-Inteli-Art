import React from 'react';

interface Sesion {
  id: number;
  curso_id: number;
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  ubicacion: string;
  precio: number;
  cupos_disponibles: number;
  estado: string;
}

const Calendario: React.FC = () => {
  // Datos simulados - en una aplicación real, estos vendrían de la API
  const sesiones: Sesion[] = [
    {
      id: 1,
      curso_id: 1,
      fecha: "15 Feb 2024",
      hora_inicio: "18:00",
      hora_fin: "20:00",
      ubicacion: "En línea",
      precio: 80.00,
      cupos_disponibles: 25,
      estado: "disponible"
    },
    {
      id: 2,
      curso_id: 2,
      fecha: "20 Feb 2024",
      hora_inicio: "19:00",
      hora_fin: "21:00",
      ubicacion: "Centro de Capacitación ABC, Madrid",
      precio: 120.00,
      cupos_disponibles: 0,
      estado: "lleno"
    },
    {
      id: 3,
      curso_id: 3,
      fecha: "01 Mar 2024",
      hora_inicio: "10:00",
      hora_fin: "14:00",
      ubicacion: "Coworking Tech, Barcelona",
      precio: 200.00,
      cupos_disponibles: 12,
      estado: "disponible"
    }
  ];

  return (
    <section className="calendario" id="calendario">
      <div className="container">
        <h2 className="section-title">Próximas Sesiones</h2>
        <div className="calendario-grid">
          {sesiones.map(sesion => (
            <div key={sesion.id} className={`sesion-card ${sesion.estado}`}>
              <div className="sesion-header">
                <h3>Sesión #{sesion.id}</h3>
                <span className={`estado estado-${sesion.estado}`}>
                  {sesion.estado === 'disponible' ? 'Disponible' : 
                   sesion.estado === 'lleno' ? 'Lleno' : 'Cancelado'}
                </span>
              </div>
              <div className="sesion-info">
                <p><strong>Fecha:</strong> {sesion.fecha}</p>
                <p><strong>Hora:</strong> {sesion.hora_inicio} - {sesion.hora_fin}</p>
                <p><strong>Ubicación:</strong> {sesion.ubicacion}</p>
                <p><strong>Precio:</strong> €{sesion.precio.toFixed(2)}</p>
                {sesion.estado === 'disponible' && 
                 <p><strong>Cupos disponibles:</strong> {sesion.cupos_disponibles}</p>}
              </div>
              <button 
                className={`btn ${sesion.estado === 'disponible' ? 'btn-primary' : 'btn-disabled'}`}
                disabled={sesion.estado !== 'disponible'}
              >
                {sesion.estado === 'disponible' ? 'Inscribirse' : 'No disponible'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Calendario;