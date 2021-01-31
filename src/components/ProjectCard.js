import React from 'react';

const ProjectCard = ( { projectTitle, projectImage, projectUrl, projectDescription, projectTech  }) => {

	return (
		<article className="project-card">    
			<a href={projectUrl} tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer">
				<div className="project-content-container">
					<img className="project-image" src={projectImage} alt="project movie site"/>
					<p className="projects-paragraph"><span className="projects-subheading">{projectTitle}</span> {projectDescription}<span className="see-more-icon">>></span>
						<div className="skill-box-container">	
							{projectTech.map(tech => 
								<div className="skill-box">{tech}</div>
							)}
						</div>
					</p>
				</div>
			</a>
		</article>
	)};

export default ProjectCard;