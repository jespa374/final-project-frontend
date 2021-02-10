import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { PROJECTS_URL } from '../urls';
import FeaturedProjects from '../components/FeaturedProjects';
import OtherProjects from '../components/OtherProjects';
import 'lib/ProjectsStyles.css';

const Projects = () => {
	const [projects, setProjects] = useState([]);

	const getProjects = () => {
		fetch(PROJECTS_URL)
		.then(res => res.json())
		.then(json => setProjects(json))
		.catch(error => console.error(error)); 
	};

	useEffect(getProjects, []);

	return (
		<>
			<section className="featured-projects-section">
				<Link className="back-link" to="/" exact="true">
					<svg 
						xmlns="http://www.w3.org/2000/svg" 
						viewBox="0 0 30 30">
						<path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#FF0000" fill-rule="evenodd">
						</path>
					</svg>
					Back
				</Link>
				<h2 class="section-heading" tabindex="0">FEATURED PROJECTS</h2>
				{projects.filter(project => project.isFeatured).map(project => 
					<FeaturedProjects 
						key={project._id}
						{...project}
					/>)
				}
			</section>
			<section className="other-projects">
				<h3 className="section-subheading" tabindex="0">OTHER PROJECTS</h3>
				{projects.filter(project => !project.isFeatured).map(project =>
					<OtherProjects 
						key={project._id}
						{...project}
					/>
				)}
			</section>	
	</>	
)};

export default Projects;