import React from 'react';

const SkillCard = ( {...skill }) => {

	// fix the fetching of the skills
	return (
		 <div className="skill-card">
		 	<h4 tabindex="0">{skill.title}</h4>
		 		<ul>
				{skill.skillItems.map(item => 
					<li tabindex="0">{item}</li>
				)}
				</ul>	
		</div>
				
		
		// {/* // <div className="skill-card">
		// // 	<h4 tabindex="0">{skill.title}</h4>
		// // 		<ul>
		// // 			<li tabindex="0">HTML5</li>
		// // 			<li tabindex="0">CSS3</li>
		// // 			<li tabindex="0">JavaScript ES6</li>
		// // 			<li tabindex="0">GitHub</li>
		// // 			<li tabindex="0">React</li>
		// // 		</ul>
		// // </div>			 */}
	)};

export default SkillCard;