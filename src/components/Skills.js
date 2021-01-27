import React, { useState, useEffect } from 'react';

import SkillCard from '../components/SkillCard';
import { SKILLS_URL } from '../urls';

const Skills = () => {
	const [skills, setSkills] = useState([]);

	const getSkills = () => {
		fetch(SKILLS_URL)
		.then(res => res.json())
		.then(json => setSkills(json))
		.catch(error => console.error(error)) 
	};

	useEffect(getSkills, []);
	console.log(skills);

	return (
		<section className="skills">
			<div className="section-heading-container">
				<h2 className="section-heading" tabindex="0">SKILLS</h2>
			</div>
			<div className="skill-card-container">
				{skills.map(skill => 
					<SkillCard 
						key={skill._id}
						{...skill}
					/>
				)}
				</div>		
		</section>
	)};

export default Skills;