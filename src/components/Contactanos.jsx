import React from "react";
import { Form, Container, Button } from "react-bootstrap";

const Contactanos = () => {
  return (
    <div className="encabezado">
      <div className="header-general">
        <img src="./img/contact.png" className="img-fluid" alt="uso celular" />
        <div className="header-fTitulo">
          <h1 className="header-titulo">Contactanos</h1>
        </div>
      </div>

      <div className="container">
        <div className="textServices1">
          <h3>¡Comunicate con nosotros!</h3>
        </div>

        <p>
          Completando los siguientes datos podremos avanzar para potenciar tu
          proyecto
        </p>
      </div>

      <Container
        action="mailto:ojmanias1985@gmail.com"
        method="post"
        enctype="text/plain"
      >
        <Form>
          <div className="container-form">
            <div className="row">
              <div class="col-sm-6">
                <Form.Group className="mb-3">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control type="text" placeholder="" />
                </Form.Group>
              </div>

              <div class="col-sm-6">
                <Form.Group className="mb-3">
                  <Form.Label>Correo Electrónico</Form.Label>
                  <Form.Control type="email" placeholder="" />
                </Form.Group>
              </div>
            </div>
          </div>

          <div className="container-form">
            <Form.Group className="mb-3">
              <Form.Label>Asunto</Form.Label>
              <Form.Control type="text" placeholder="" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Tu consulta</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </div>
        </Form>
        <div className="btnSend">
          <Button>
            <a href="mailto:federico.sperling@gmail.com">Enviar</a>
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Contactanos;
