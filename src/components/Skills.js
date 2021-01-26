import React from 'react';

const Skills = () => {

	return (
		<section className="skills">
			<div className="section-heading-container">
				<h2 className="section-heading" tabindex="0">SKILLS</h2>
			</div>
			<div className="skill-card-container">
				<div className="skill-card">
						<h4 tabindex="0">CODE</h4>
						<ul>
							<li tabindex="0">HTML5</li>
							<li tabindex="0">CSS3</li>
							<li tabindex="0">JavaScript ES6</li>
							<li tabindex="0">GitHub</li>
							<li tabindex="0">React</li>
						</ul>
				</div>
				<div className="skill-card">
					<h4 tabindex="0">TOOLBOX</h4>
					<ul>
							<li tabindex="0">Microsoft Excel</li>
							<li tabindex="0">Slack</li>
							<li tabindex="0">Stack Overflow</li>
							<li tabindex="0">Visual Studio Code</li>
					</ul>
				</div>
				<div className="skill-card">
					<h4 tabindex="0">UPCOMING</h4>
						<ul>
							<li tabindex="0">Node.js</li>
							<li tabindex="0">Redux</li>
							<li tabindex="0">SASS</li>
						</ul>
				</div>   
				<div className="skill-card">  
					<h4 tabindex="0">MORE</h4>
					<ul>
						<li tabindex="0">Agile methodology</li>
						<li tabindex="0">Web Accessibility</li>
						<li tabindex="0">Mob Programming</li>
						<li tabindex="0">Pair Programming</li>
					</ul>
				</div> 
			</div>
		</section>
		)};

export default Skills;