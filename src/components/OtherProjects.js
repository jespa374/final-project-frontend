import React from 'react';

const OtherProjects = ({ ...project }) => {
	
	return (
		<>
			<article className="project-card">
				<a href={project.url} role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer">
					<div className="project-content-container">
						<p className="projects-paragraph"><span className="projects-subheading">{project.title}</span>{project.description}<span className="see-more-icon">>></span>
							<div className="skill-box-container">
								{project.tech.map(tech => 
									<div className="skill-box">{tech}</div>
								)}
							</div>
						</p>
					</div>
				</a>
			</article>
		</>
	)};

export default OtherProjects;