import React from "react";
import { Carousel,Image,Figure } from "react-bootstrap";
import imagenes from './assets/imagenes'
const CarouselRender = () => {
  return (
    <>
    <Carousel>

    <Carousel.Item>
      <div>
        <Image src={imagenes.imgBusan} fluid/>
      </div>
      <div>
        <Image src={imagenes.imgKyoto} fluid/>
      </div>
    </Carousel.Item>
    <Carousel.Item>
    <div>
        <Image src={imagenes.imgTokyo} fluid/>
      </div>
      <Figure className="mx-3 ">
        <Figure.Caption className="text-dark text-center">Mountain</Figure.Caption>
        <Figure.Image width={400} height={250} alt="171x180" src={imagenes.imgTokyo} className="rounded" />
      </Figure>
    </Carousel.Item>




    </Carousel>
    </>
  );
};

export default CarouselRender;
