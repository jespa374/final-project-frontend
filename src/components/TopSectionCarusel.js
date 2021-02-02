import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

import HotPink from 'assets/hot-pink.jpg';
import Bubbles from 'assets/bubbles.jpg';
import Red from 'assets/red.jpg';
import Typewriter from 'typewriter-effect';
import ProfilePic from 'assets/profilepic.png';

const TopSectionCarousel = () => {

    return (
      <>
        <Carousel>
          <section className="top-section" tabindex="0">
            <div className="social-media-container">
              <a href="https://www.linkedin.com/in/jessica-panditha-4b676210a/" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer"><div className="icon-linkedin"></div></a>
              <a href="https://github.com/jespa374" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer"><div className="icon-github"></div></a>
              <a href="https://stackoverflow.com/c/technigo/users/148" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer"><div className="icon-stackoverflow"></div></a>
            </div>
				    <div className="profile-card">
					    <div className="profile-card-text-container">
                <h1 className="heading-portfolio" tabindex="0">PORTFOLIO: <span className="name">JESSICA PANDITHA</span></h1>
                <h1 className="heading-frontend-developer" tabindex="0">frontend developer</h1>
                <h2 
                  className="heading-system-specialist"
                  tabindex="0">
                  <Typewriter 
                    options={{
                    strings: ["+ system specialist with business administration background", "Fullstack developer in the making"],
                    autoStart: true,
                    loop: true,
                    delay: 50
                    }}
                    />
                </h2>
						    {/* <h2 className="heading-system-specialist" tabindex="0">+ system specialist with business administration background</h2> */}
					    </div>
					    <img src={ProfilePic} className="profile-image" alt="darkhaired girl in a polkadot blouse"/>
				    </div>
          </section>
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
    </>
  )};

export default TopSectionCarousel;