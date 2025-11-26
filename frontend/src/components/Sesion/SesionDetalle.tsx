import React from 'react';

interface SesionDetalle {
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

const SesionDetalle: React.FC<{ sesion: SesionDetalle }> = ({ sesion }) => {
  return (
    <div className={`sesion-detalle ${sesion.estado}`}>
      <div className="sesion-header">
        <h3>Sesión #{sesion.id}</h3>
        <span className={`estado estado-${sesion.estado}`}>
          {sesion.estado === 'disponible' ? 'Disponible' : 
           sesion.estado === 'lleno' ? 'Lleno' : 'Cancelado'}
        </span>
      </div>
      
      <div className="sesion-info">
        <div className="info-row">
          <strong>Fecha:</strong> {sesion.fecha}
        </div>
        <div className="info-row">
          <strong>Hora:</strong> {sesion.hora_inicio} - {sesion.hora_fin}
        </div>
        <div className="info-row">
          <strong>Ubicación:</strong> {sesion.ubicacion}
        </div>
        <div className="info-row">
          <strong>Precio:</strong> €{sesion.precio.toFixed(2)}
        </div>
        {sesion.estado === 'disponible' && (
          <div className="info-row">
            <strong>Cupos disponibles:</strong> {sesion.cupos_disponibles}
          </div>
        )}
      </div>
      
      <div className="sesion-actions">
        <button 
          className={`btn ${sesion.estado === 'disponible' ? 'btn-primary' : 'btn-disabled'}`}
          disabled={sesion.estado !== 'disponible'}
        >
          {sesion.estado === 'disponible' ? 'Inscribirse' : 'No disponible'}
        </button>
      </div>
    </div>
  );
};

export default SesionDetalle;