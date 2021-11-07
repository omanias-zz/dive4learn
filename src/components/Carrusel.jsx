import React from "react";
import { Carousel } from "react-bootstrap";

export const Carrusel = () => {
  return (
    <>
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/imagen1recortadaYAchicada.png"
            alt="clase virtual"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/imagen2.png"
            alt="reunión ejecutiva"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/img/consu2.png"
            alt="estudiante"
          />
        </Carousel.Item>
        {/* <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=Third slide&bg=20232a"
              alt="Third slide"
            />
      
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item> */}
      </Carousel>
    </>
  );
};
