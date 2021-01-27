import React from 'react';

const SkillCard = ( {...skill }) => {

	return (
		<div className="skill-card">
						<h4 tabindex="0">{skill.title}</h4>
						<ul>
							<li tabindex="0">HTML5</li>
							<li tabindex="0">CSS3</li>
							<li tabindex="0">JavaScript ES6</li>
							<li tabindex="0">GitHub</li>
							<li tabindex="0">React</li>
						</ul>
				</div>
	)

}

export default SkillCard;