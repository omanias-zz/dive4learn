import React from "react";
import './styles.css';

const Home = () => {
  return (
    <div>
      <img src="/img/imagen1recortadaYAchicada.png" className="home-imagen" alt="clase virtual" />
      <div className="home-texto">
        <h1 className="home-texto1">Optimizamos la experiencia del aprendizaje, mediante la transformación digital</h1>
        <h3 className="home-texto2" >Somos una empresa especializada en desarrollar proyectos de educación online, 
          mediante herramientas estratégicas para la transformación y adopción de nuevas
          tecnologías en la educación.
        </h3>
      </div>
      <div className="home-mail" >
        <img src="/img/mail.png" className="home-mail-icono" alt="ícono mail" />
      </div>
    </div>
  );
};

export default Home;
