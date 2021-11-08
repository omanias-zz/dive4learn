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
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <p>
              El <strong>mundo educativo</strong> se vio revolucionado en los
              últimos años, y el desafío en la educación superior de{" "}
              <strong>transformarse</strong> y adoptar nuevas tecnologías y
              procesos se convirtió en una <strong>necesidad</strong> demandada
              por los estudiantes y las organizaciones que están incorporando
              estas nuevas generaciones.{" "}
              <strong>
                El problema radica en que escasean los espacios de capacitación
                fiables para que esto sea posible.
              </strong>
              <br />
              En{" "}
              <span className="elegirnos-naranja">
                <strong>Dive4Learn</strong>
              </span>{" "}
              somos conscientes de estos obstáculos, y para poder brindar
              soluciones, nos hemos especializado en{" "}
              <strong>transformaciones digitales de la educación.</strong> Somos
              un equipo comprometido en educación que no solo transforma cursos
              presenciales en virtuales, sino que diseña{" "}
              <strong>experiencias de aprendizaje</strong> mediante las últimas
              tendencias en <strong>e-learning.</strong>
            </p>
          </div>
          <div className="col-sm-4">
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
    </div>
  );
};

export default Elegirnos;
