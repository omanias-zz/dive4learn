import React from "react";

const Servicios = () => {
  return (
    <div>
      <div>
        <img src="./img/consultoria.png" alt="" />
      </div>

      <div className="headerServices">
        <h1>Consultoria</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="textServices1">
              <h3>¿Cuál es nuestro enfoque?</h3>
            </div>
            <div className="textServices">
              <p>
                Miramos la organización como un{" "}
                <strong>concepto sistémico</strong> para poder trabajar en
                conjunto con el cliente, implementando las mejores tecnologías y
                estrategias personalizadas.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <img className="ilustra" src="./img/Consultoria 3.png" alt="" />
          </div>
        </div>
      </div>

      <div>
        <img src="./img/pexels.png" alt="" />
      </div>

      <div className="headerServices">
        <h1>Desarrollo de cursos</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <img className="ilustra" src="./img/Group 83.png" alt="" />
          </div>
          <div className="col-sm-8">
            <div className="textServices1">
              <h3>¿Cómo podemos ayudarte?</h3>
            </div>

            <div className="textServices">
              <p>
                Llevamos a cabo los procesos para la{" "}
                <strong>creación de cursos on-line</strong>, fomentando una
                experiencia de aprendizaje enriquecedora. También proponemos el
                servicio de <strong>mejora continua</strong>, evaluando la
                experiencia vivida con el fin de mejorar la siguiente cursada.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <img src="./img/desCursos.png" alt="" />
      </div>

      <div className="headerServices">
        <h1>Capacitación</h1>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <div className="textServices1">
              <h3>¿Qué te ofrecemos?</h3>
            </div>

            <div className="textServices">
              <p>
                Brindamos <strong>entrenamiento</strong> para docentes y
                estudiantes, orientando el uso de nuevas tecnologías educativas
                y como transicionar las clases convencionales al{" "}
                <strong>e-learning</strong>.
              </p>
            </div>
          </div>
          <div className="col-sm-4">
            <img className="ilustra" src="./img/Group 84.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Servicios;
