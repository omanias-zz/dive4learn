import React from "react";
import {
  Form,
  Row,
  Col,
  Container,
  FloatingLabel,
  Button,
} from "react-bootstrap";

const Contactanos = () => {
  return (
    <div>
      <div className="header">
        <h1>Contactanos</h1>
      </div>
      <Container>
        <Form>
          <Row>
            <Col>
              <FloatingLabel controlId="floatingInputGrid" label="Nombre">
                <Form.Control type="text" placeholder="Nombre" />
              </FloatingLabel>
            </Col>
            <Col>
              <FloatingLabel
                controlId="floatingInputGrid"
                label="Correo electrónico"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
          </Row>
        </Form>
      </Container>
      <hr />
      <Container>
        <FloatingLabel controlId="floatingTextarea2" label="Comentario">
          <Form.Control as="textarea" style={{ height: "100px" }} />
        </FloatingLabel>
        <div className="btnSend">
          <Button variant="outline-success">Enviar</Button>{" "}
        </div>
      </Container>
    </div>
  );
};

export default Contactanos;
