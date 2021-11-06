import React from "react";

const Elegirnos = () => {
  return (
    <div className="elegirnos">
      <div className="elegirnos-header">
        <img
          src="/img/elegirnos.png"
          className="img-fluid  "
          alt="mirada virtual"
        />
        <div className="elegirnos-fTitulo">
          <h1 className="elegirnos-titulo">¿Por qué elegirnos?</h1>
        </div>
      </div>
      <div className="elegirnos-cuerpo">
        <div className="elegirnos-textos">
          <div className="elegirnos-texto1">
            <p>
              El <span className="elegirnos-bold">mundo educativo</span> se vio
              revolucionado en los últimos años, y el desafío en la
            </p>
            <p>
              educación superior de{" "}
              <span className="elegirnos-bold">transformarse</span> y adoptar
              nuevas tecnologías y procesos se
            </p>
            <p>
              convirtió en una <span className="elegirnos-bold">necesidad</span>{" "}
              demandada por los estudiantes y las organizaciones que
            </p>
            <p>
              están incorporando estas nuevas generaciones.{" "}
              <span className="elegirnos-bold">El problema radica en que</span>
            </p>
            <p>
              <span className="elegirnos-bold">
                escasean los espacios de capacitación fiables para que esto sea
              </span>
            </p>
            <p>
              <span className="elegirnos-bold">posible.</span>
            </p>
          </div>
          <div className="elegirnos-texto2">
            <p>
              <span className="elegirnos-bold">En</span>{" "}
              <span className="elegirnos-bold elegirnos-naranja">
                Dive4Learn
              </span>{" "}
              somos conscientes de estos obstáculos, y para poder
            </p>
            <p>
              brindar soluciones, nos hemos especializado en{" "}
              <span className="elegirnos-bold">transformaciones</span>
            </p>
            <p>
              <span className="elegirnos-bold">digitales de la educación.</span>
            </p>
            <p>
              Somos un equipo comprometido en educación que no solo transforma
            </p>
            <p>
              cursos presenciales en virtuales, sino que diseña{" "}
              <span className="elegirnos-bold">experiencias de</span>
            </p>
            <p>
              <span className="elegirnos-bold">aprendizaje</span> mediante las
              últimas tendencias en{" "}
              <span className="elegirnos-bold">e-learning.</span>
            </p>
          </div>
        </div>
        <div>
          <div className="elegirnos-cuerpo-imagen">
            <img
              className="elegirnos-mundo"
              src="/img/elegirnos-mundo.png"
              alt="mundo conectado"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Elegirnos;
