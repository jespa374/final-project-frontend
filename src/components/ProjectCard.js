import React from 'react';

const ProjectCard = ( { projectTitle, projectImage, projectUrl, projectDescription, projectTech  }) => {

	return (
		<article className="project-card">    
			<a href={projectUrl} tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer">
				<div className="project-content-container">
					<img className="project-image" src={projectImage} alt="project movie site"/>
					<p className="projects-paragraph"><span className="projects-subheading">{projectTitle}</span> {projectDescription}<span className="see-more-icon">>></span>
						<div className="skill-box-container">
							<div className="skill-box">REACT</div>
							<div className="skill-box">CSS3</div>
							<div className="skill-box">JavaScript ES6</div>
						</div>
					</p>
				</div>
			</a>
		</article>
	)};

export default ProjectCard;