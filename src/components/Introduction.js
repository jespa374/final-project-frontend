import React from 'react';

import ProfilePic from 'assets/profilepic.png';
import LineBullet from 'assets/line-bullet.svg';

const Introduction = () => {
    
    return ( <>
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
						<h2 className="heading-system-specialist" tabindex="0">+ system specialist with business administration background</h2>
					</div>
					<img src={ProfilePic} className="profile-image" alt="darkhaired girl in a polkadot blouse"/>
				</div>
			</section>
			<section className="summary-section" tabindex="0">
				<p className="summary-description"> <img className="line-bullet" alt="sideway lollipop bullet" src={LineBullet}/>Hello! I am a frontend developer student at Technigo and I am working as a system specialist. I have a master of science in Business and economics but I am interested in switching gears into working as a frontend developer after I graduate from Technigo.</p>
			</section>
		</>
	)};

export default Introduction;