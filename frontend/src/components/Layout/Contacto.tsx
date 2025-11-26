import React, { useState } from 'react';

interface FormData {
  nombre: string;
  email: string;
  telefono: string;
  cursoInteres: string;
  nivelConocimiento: string;
  disponibilidad: string;
  mensaje: string;
  aceptaMails: boolean;
}

const Contacto: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nombre: '',
    email: '',
    telefono: '',
    cursoInteres: '',
    nivelConocimiento: '',
    disponibilidad: '',
    mensaje: '',
    aceptaMails: true
  });

  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setEnviando(true);

    try {
      // Simulando una llamada a la API
      await new Promise(resolve => setTimeout(resolve, 1000));

      // En una aplicación real, aquí se enviarían los datos a la API
      // await ApiService.sendContactForm(formData);

      setEnviado(true);

      // Resetear el formulario después de enviar
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        cursoInteres: '',
        nivelConocimiento: '',
        disponibilidad: '',
        mensaje: '',
        aceptaMails: true
      });
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      alert('Hubo un error al enviar el formulario. Por favor, intenta de nuevo.');
    } finally {
      setEnviando(false);
    }
  };

  if (enviado) {
    return (
      <section className="contacto" id="contacto">
        <div className="container">
          <h2 className="section-title">¡Gracias por tu mensaje!</h2>
          <div className="mensaje-enviado">
            <div className="mensaje-icono">✓</div>
            <p>Hemos recibido tu solicitud de información. Nos pondremos en contacto contigo en breve.</p>
            <button
              className="btn btn-primary"
              onClick={() => setEnviado(false)}
            >
              Enviar otro mensaje
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contacto" id="contacto">
      <div className="container">
        <h2 className="section-title">Contáctanos o Preinscríbete</h2>
        <div className="contacto-content">
          <div className="contacto-info">
            <h3>¿Tienes preguntas o quieres asegurar tu plaza?</h3>
            <p>Completa este formulario para:</p>
            <ul>
              <li>Obtener más información sobre nuestros cursos</li>
              <li>Preinscribirte en el próximo curso disponible</li>
              <li>Recibir notificaciones de nuevos cursos</li>
              <li>Resolver cualquier duda sobre el contenido</li>
            </ul>
            <div className="contacto-destacado">
              <p><strong>¡Además, al preinscribirte temprano obtienes un descuento especial!</strong></p>
            </div>
          </div>
          <form className="contacto-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="nombre">Nombre completo *</label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Correo electrónico *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="telefono">Teléfono (opcional)</label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="cursoInteres">Curso de interés *</label>
                <select
                  id="cursoInteres"
                  name="cursoInteres"
                  value={formData.cursoInteres}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un curso</option>
                  <option value="inicial">Curso Inicial 1.0</option>
                  <option value="intermedio">Curso 2.0</option>
                  <option value="avanzado">Curso 3.0</option>
                  <option value="todos">Todos los cursos</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="nivelConocimiento">Nivel de conocimiento actual en IA</label>
                <select
                  id="nivelConocimiento"
                  name="nivelConocimiento"
                  value={formData.nivelConocimiento}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="sin">Sin experiencia</option>
                  <option value="basico">Básico</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="avanzado">Avanzado</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="disponibilidad">¿Cuándo podrías asistir?</label>
                <select
                  id="disponibilidad"
                  name="disponibilidad"
                  value={formData.disponibilidad}
                  onChange={handleChange}
                >
                  <option value="">Selecciona una opción</option>
                  <option value="inmediata">Inmediatamente</option>
                  <option value="1mes">En el próximo mes</option>
                  <option value="3meses">En los próximos 3 meses</option>
                  <option value="6meses">En los próximos 6 meses</option>
                  <option value="sin_fecha">Todavía no lo tengo claro</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="mensaje">Mensaje (opcional)</label>
              <textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                rows={4}
              ></textarea>
            </div>

            <div className="form-group checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="aceptaMails"
                  checked={formData.aceptaMails}
                  onChange={handleChange}
                />
                <span className="checkmark"></span>
                Acepto recibir información sobre promociones, nuevos cursos y novedades (puedes darte de baja en cualquier momento)
              </label>
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              disabled={enviando}
            >
              {enviando ? 'Enviando...' : 'Enviar solicitud'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacto;