import React from 'react';
import Typewriter from 'typewriter-effect';

import ProfilePic from 'assets/profilepic.png';

const ProfileCard = () => {
  return (
    <>
      <div className="social-media-container">
        <a 
          href="https://www.linkedin.com/in/jessica-panditha-4b676210a/" 
          tabindex="0"
          role="button"
          aria-pressed="false" 
          target="_blank" 
          rel="noopener noreferrer">
          <div className="icon-linkedin"></div>
        </a>
        <a 
          href="https://github.com/jespa374" 
          tabindex="0" 
          role="button" 
          aria-pressed="false" 
          target="_blank" 
          rel="noopener noreferrer">
          <div className="icon-github"></div>
        </a>
        <a 
          href="https://stackoverflow.com/c/technigo/users/148" 
          tabindex="0" 
          role="button" 
          aria-pressed="false" 
          target="_blank" 
          rel="noopener noreferrer">
          <div className="icon-stackoverflow"></div>
        </a>
      </div>
      <div className="profile-card">
        <div className="profile-card-text-container">
          <h1 
            className="heading-portfolio" 
            tabindex="0">PORTFOLIO: 
            <span className="name">
              JESSICA PANDITHA
            </span>
          </h1>
          <h1 
            className="heading-frontend-developer" 
            tabindex="0">frontend developer
          </h1>
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
        </div>
        <img 
          src={ProfilePic} 
          className="profile-image" 
          alt="darkhaired girl in a polkadot blouse"
        />
      </div>
    </>
  )};

export default ProfileCard;