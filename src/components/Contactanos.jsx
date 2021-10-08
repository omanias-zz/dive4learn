import React from "react";
import {
  Form,
  Row,
  Col,
  Control,
  Container,
  FloatingLabel,
} from "react-bootstrap";
import { Avatar, Grid } from "@nextui-org/react";

const Contactanos = () => {
  return (
    <div>
      <h1>Contáctanos</h1>
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
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
      </Container>

      <Grid.Container gap={1}>
        <Grid>
          <Avatar size="large" src="/avatars/avatar-6.png" zoomed />
        </Grid>
        <Grid>
          <Avatar size="large" src="/avatars/avatar-2.png" zoomed />
        </Grid>
        <Grid>
          <Avatar size="large" src="/avatars/avatar-1.png" zoomed />
        </Grid>
      </Grid.Container>
    </div>
  );
};

export default Contactanos;
