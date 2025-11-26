import React from 'react';

interface InfoSesion {
  fecha: string;
  hora_inicio: string;
  hora_fin: string;
  ubicacion: string;
  precio: number;
  cupos_disponibles: number;
  estado: string;
  descripcion: string;
}

interface SesionItem {
  id: number;
  titulo: string;
  info: InfoSesion;
}

interface SesionCardProps {
  sesion: SesionItem;
  onInscribirseClick: (id: number) => void;
}

const SesionCard: React.FC<SesionCardProps> = ({ sesion, onInscribirseClick }) => {
  const { id, titulo, info } = sesion;
  
  return (
    <div className={`sesion-card ${info.estado}`}>
      <div className="sesion-card-header">
        <h3>{titulo}</h3>
        <span className={`estado estado-${info.estado}`}>
          {info.estado === 'disponible' ? 'Disponible' : 
           info.estado === 'lleno' ? 'Lleno' : 'Cancelado'}
        </span>
      </div>
      
      <div className="sesion-card-body">
        <div className="sesion-card-info">
          <p><strong>Fecha:</strong> {info.fecha}</p>
          <p><strong>Hora:</strong> {info.hora_inicio} - {info.hora_fin}</p>
          <p><strong>Ubicación:</strong> {info.ubicacion}</p>
          <p><strong>Precio:</strong> €{info.precio.toFixed(2)}</p>
          {info.estado === 'disponible' && 
           <p><strong>Cupos disponibles:</strong> {info.cupos_disponibles}</p>}
        </div>
        <p>{info.descripcion}</p>
      </div>
      
      <div className="sesion-card-footer">
        <button 
          className={`btn ${info.estado === 'disponible' ? 'btn-primary' : 'btn-disabled'}`}
          onClick={() => onInscribirseClick(id)}
          disabled={info.estado !== 'disponible'}
        >
          {info.estado === 'disponible' ? 'Inscribirse' : 'No disponible'}
        </button>
      </div>
    </div>
  );
};

export default SesionCard;