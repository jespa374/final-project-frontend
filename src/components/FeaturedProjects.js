import React from 'react';
import ProjectCard from './ProjectCard';

const FeaturedProjects = ({ ...project }) => {

	return (
      <>
				<ProjectCard 
					projectTitle={project.title}
					projectImage={project.imageUrl}
					projectUrl={project.url}
					projectDescription={project.description}
					projectTech={project.tech}
					projectImageText={project.imageText}
				/>
			</>
		)};

export default FeaturedProjects;