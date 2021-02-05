import React from 'react';

import TopSectionCarousel from 'components/TopSectionCarusel';
import ProfileCard from 'components/ProfileCard';
import LineBullet from 'assets/line-bullet.svg';

const Introduction = () => {
    
    return (
			 <>
				<TopSectionCarousel />
				<ProfileCard />
				<section className="summary-section" tabindex="0">
					<p className="summary-description"> <img className="line-bullet" alt="sideway lollipop bullet" src={LineBullet}/>Hello! I am a frontend developer student at Technigo and I am working as a system specialist. I have a master of science in Business and economics but I am interested in switching gears into working as a frontend developer after I graduate from Technigo.</p>
				</section>
			</>
		)};

export default Introduction;