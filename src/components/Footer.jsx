import React from "react";
import { Image, Container, Row, Col } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

const Footer = () => {
  return (
    <div>
      <div className="content-wrap">
        <hr />
        <div className="footerFather">
          <Navbar.Brand>Div4Learn</Navbar.Brand>
          <div className="footer">
            <p>Aguirre Cámara 15 - Buenos Aires - Argentina</p>
            <p>011-XXXXX-XXXXX</p>
            <p>div4learn@gmail.com</p>
          </div>

          <div>
            <Container>
              <Row>
                <Col xs={6} md={4}>
                  <Image src="src/img/facebook.png" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="src/img/instagram.png" roundedCircle />
                </Col>
                <Col xs={6} md={4}>
                  <Image src="src/img/instagram.png" roundedCircle />
                </Col>
              </Row>
            </Container>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
