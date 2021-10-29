import React from "react";
import './styles.css';
import { Carrusel } from './Carrusel.jsx';

const Home = () => {
  return (
    <div>
      <Carrusel />
      <div className="home">
        <div className="home-texto">
          <h1 className="home-texto1">Optimizamos la experiencia del aprendizaje, mediante la transformación digital</h1>
          <div className="home-mail" >
            <img src="/img/mail.png" className="home-mail-icono" alt="ícono mail" />
          </div>
          <p className="home-texto2" >Somos una empresa especializada en desarrollar proyectos de educación online, 
            mediante herramientas estratégicas para la transformación y adopción de nuevas
            tecnologías en la educación.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
