import React from 'react';
import '../../App.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title">Aprende Inteligencia Artificial</h1>
        <p className="hero-subtitle">
          Descubre cómo la IA puede transformar tu vida profesional y personal
        </p>
        <div className="hero-cta">
          <a href="#cursos" className="btn btn-primary">Explorar Cursos</a>
          <a href="#contacto" className="btn btn-secondary">Más Información</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;