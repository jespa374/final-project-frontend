import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import HotPink from 'assets/hot-pink.jpg';
import Bubbles from 'assets/bubbles.jpg';
import Red from 'assets/red.jpg';

const TopSectionCarousel = () => {

    return (
      <>
      <section className="carousel-container">
        <Carousel className="carousel">
          <Carousel.Item interval={1000}>
            <img
              className="top-section"
              src={HotPink}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="top-section"
              src={Red}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
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