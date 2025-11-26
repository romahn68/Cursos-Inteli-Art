import React from 'react';
import '../../App.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Cursos de IA</h1>
        <nav className="navigation">
          <ul>
            <li><a href="#cursos">Cursos</a></li>
            <li><a href="#calendario">Calendario</a></li>
            <li><a href="#testimonios">Testimonios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;