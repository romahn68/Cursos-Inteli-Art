import React from 'react';
import Header from '../components/Layout/Header';
import Hero from '../components/Layout/Hero';
import CursosDestacados from '../components/Curso/CursosDestacados';
import Testimonios from '../components/Testimonio/Testimonios';
import Calendario from '../components/Sesion/Calendario';
import Contacto from '../components/Layout/Contacto';
import RecursosAdicionales from '../components/Layout/RecursosAdicionales';
import Footer from '../components/Layout/Footer';

const HomePage: React.FC = () => {
  return (
    <div className="HomePage">
      <Header />
      <Hero />
      <CursosDestacados />
      <Calendario />
      <Testimonios />
      <RecursosAdicionales />
      <Contacto />
      <Footer />
    </div>
  );
};

export default HomePage;