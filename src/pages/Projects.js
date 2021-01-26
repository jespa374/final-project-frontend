import React from 'react';
import { Link } from 'react-router-dom';

import Movies from '../assets/movies.png';
import Music from '../assets/music.png';
import Cluedo from '../assets/cluedo.png';
import Donna from '../assets/donna.png';

const Projects = () => {

	return (
		<>
		<section className="featured-projects-section">
			<Link className="back-link" to="/" exact="true">
				<svg xmlns="http://www.w3.org/2000/svg" 
				viewBox="0 0 30 30">
					<path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd">
					</path>
				</svg>
					Back
			</Link>
			<h2 class="section-heading" tabindex="0">FEATURED PROJECTS</h2>
			<article className="project-card">    
				<a href="https://github.com/jespa374/project-movies" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer">
					<div className="project-content-container">
						<img className="project-image" src={Movies} alt="project movie site"/>
						<p className="projects-paragraph"><span className="projects-subheading">MOVIE SITE.</span> Built with REACT<span className="see-more-icon">>></span>
							<div className="skill-box-container">
								<div className="skill-box">REACT</div>
								<div className="skill-box">CSS3</div>
								<div className="skill-box">JavaScript ES6</div>
							</div>
						</p>
					</div>
				</a>
			</article>
			<article className="project-card">
				<a href="https://github.com/jespa374/project-music-releases" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer">
					<div className="project-content-container">
						<img className="project-image" src={Music} alt="project music site"/>
						<p className="projects-paragraph"><span className="projects-subheading">MUSIC SITE.</span> Built with REACT<span className="see-more-icon">>></span>
							<div className="skill-box-container">
								<div className="skill-box">REACT</div>
								<div className="skill-box">CSS3</div>
								<div className="skill-box">JavaScript ES6</div>
							</div>
						</p>
					</div>
				</a>
			</article>
			<article className="project-card">
				<a href="https://github.com/jespa374/project-cluedo" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer">
					<div className="project-content-container">
						<img className="project-image" src={Cluedo} alt="project cluedo"/>
						<p className="projects-paragraph"><span className="projects-subheading">CLUEDO GAME.</span> Built with HTML, CSS & JavaScript<span className="see-more-icon">>></span>
							<div className="skill-box-container">
								<div className="skill-box">HTML5</div>
								<div className="skill-box">CSS3</div>
								<div className="skill-box">JavaScript ES6</div>
							</div>
						</p>
					</div>
				</a>
			</article>
			<article className="project-card">
				<a href="https://github.com/jespa374/project-news-site" tabindex="0">
					<div className="project-content-container">
						<img className="project-image" src={Donna} alt="project news site"/>
						<p className="projects-paragraph"><span className="projects-subheading">NEWS SITE.</span> Built with HTML & CSS<span className="see-more-icon">>></span>
							<div className="skill-box-container">
								<div className="skill-box">HTML5</div>
								<div className="skill-box">CSS3</div>
								<div className="skill-box">JavaScript ES6</div>
							</div>
						</p>
					</div>
				</a>
			</article>
		</section>
		<section className="other-projects">
		<h3 className="section-subheading" tabindex="0">OTHER PROJECTS</h3>
		<article className="project-card">
			<a href="https://github.com/jespa374/project-weather-app" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer">
				<div className="project-content-container">
					<p className="projects-paragraph"><span className="projects-subheading">WEATHER APP.</span>Built with JavaScript using the weather API.<span className="see-more-icon">>></span>
						<div className="skill-box-container">
							<div className="skill-box">HTML5</div>
							<div className="skill-box">CSS3</div>
							<div className="skill-box">JavaScript ES6</div>
						</div>
					</p>
				</div>
			</a>
		</article>
		<article className="project-card">
			<a href="https://github.com/jespa374/project-happy-thoughts" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer">
				<div className="project-content-container">
					<p className="projects-paragraph"><span className="projects-subheading">HAPPY THOUGHTS APP.</span> Website similar to Twitter using API<span className="see-more-icon">>></span>
						<div className="skill-box-container">
							<div className="skill-box">REACT</div>
							<div className="skill-box">CSS3</div>
							<div className="skill-box">JavaScript ES6</div>
						</div>
					</p>
				</div>
			</a>
		</article>
		<article className="project-card">
			<a href="https://github.com/jespa374/project-food-foxes-2" tabindex="0">
				<div className="project-content-container">
					<p className="projects-paragraph"><span className="projects-subheading">FOOD REVIEW.</span> Food review website similar to Deliveroo using API<span className="see-more-icon">>></span>
						<div className="skill-box-container">
							<div className="skill-box">HTML5</div>
							<div className="skill-box">CSS3</div>
							<div className="skill-box">JavaScript ES6</div>
						</div>
					</p>
				</div>
			</a>                
		</article>
	</section>
</>
)};

export default Projects;