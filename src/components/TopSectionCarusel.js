import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import HotPink from 'assets/hot-pink.jpg';
import Bubbles from 'assets/bubbles.jpg';
import Red from 'assets/red.jpg';

// how to increase the height of the top section?

const TopSectionCarousel = () => {

    return (
      <>
      <section className="carousel-container">
        <Carousel className="carousel">
          <Carousel.Item className="carousel-item" interval={1000}>
            <img
              className="top-section"
              src={HotPink}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item" interval={500}>
            <img
              className="top-section"
              src={Red}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item className="carousel-item">
            <img
              className="top-section"
              src={Bubbles}
              alt="Third slide"
            />
        </Carousel.Item>
      </Carousel>
      </section>
    </>
  )};

export default TopSectionCarousel;