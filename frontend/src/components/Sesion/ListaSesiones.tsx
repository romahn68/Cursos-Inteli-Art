import React, { useState, useEffect } from 'react';
import ApiService from '../../utils/ApiService';

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

interface ListaSesionesProps {
  cursoId?: number;
}

const ListaSesiones: React.FC<ListaSesionesProps> = ({ cursoId }) => {
  const [sesiones, setSesiones] = useState<Sesion[]>([]);
  const [cargando, setCargando] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarSesiones = async () => {
      try {
        let response;

        if (cursoId) {
          response = await ApiService.getSesionesByCurso(cursoId);
        } else {
          response = await ApiService.getSesiones();
        }

        setSesiones(response);
      } catch (err) {
        setError('Error al cargar las sesiones. Por favor, inténtalo de nuevo más tarde.');
        console.error('Error al cargar sesiones:', err);
      } finally {
        setCargando(false);
      }
    };

    cargarSesiones();
  }, [cursoId]);

  if (cargando) {
    return <div className="cargando">Cargando sesiones...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="lista-sesiones">
      <h3>Próximas Sesiones</h3>
      <div className="sesiones-grid">
        {sesiones.map(sesion => (
          <div key={sesion.id} className={`sesion-item ${sesion.estado}`}>
            <h4>Sesión #{sesion.id}</h4>
            <p className="sesion-fecha">{sesion.fecha}</p>
            <p className="sesion-hora">{sesion.hora_inicio} - {sesion.hora_fin}</p>
            <p className="sesion-ubicacion">{sesion.ubicacion}</p>
            <p className="sesion-precio">Precio: €{sesion.precio.toFixed(2)}</p>
            {sesion.estado === 'disponible' && (
              <p className="sesion-cupos">Cupos disponibles: {sesion.cupos_disponibles}</p>
            )}
            <span className={`estado estado-${sesion.estado}`}>
              {sesion.estado === 'disponible' ? 'Disponible' :
                sesion.estado === 'lleno' ? 'Lleno' : 'Cancelado'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaSesiones;