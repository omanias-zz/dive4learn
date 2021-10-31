import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="footerFather footer-general">
        <div className="footer">
          <p className="footer-texto">Todos los derechos reservados © Dive4Learn</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;


{/* <div className="content-wrap">
        <hr />
        <div className="footerFather">
          <Navbar.Brand>Dive4Learn</Navbar.Brand>
          <div className="footer">
            <p>Aguirre Cámara 15 - Buenos Aires - Argentina</p>
            <p>011-XXXXX-XXXXX</p>
            <p>info@dive4learn.com</p>
          </div>

          <div>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <a href="#">
                    <Image src="/img/facebook.png" roundedCircle />
                  </a>
                </Col>
                <Col xs={6} md={4}>
                  <a href="#">
                    <Image src="/img/instagram.png" roundedCircle />
                  </a>
                </Col>
                <Col xs={6} md={4}>
                  <a href="https://wa.me/3512660233">
                    <Image src="/img/whatsapp.png" roundedCircle />
                  </a>
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div> */}
