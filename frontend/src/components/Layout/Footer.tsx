import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-info">
            <h3>Cursos de IA</h3>
            <p>Transformando vidas a través de la educación en Inteligencia Artificial</p>
          </div>
          <div className="footer-links">
            <h4>Enlaces rápidos</h4>
            <ul>
              <li><a href="#cursos">Cursos</a></li>
              <li><a href="#calendario">Calendario</a></li>
              <li><a href="#testimonios">Testimonios</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contacto</h4>
            <p>info@cursosdeia.com</p>
            <p>+34 123 456 789</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Cursos de IA. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;