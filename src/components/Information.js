import React from 'react';

import LinkedinRed from '../assets/linkedinred.svg';
import GithubRed from '../assets/githubred.svg';
import StackoverflowRed from '../assets/stackoverflowred.svg';

const Information = () => {

	return (
		<section className="information">
			<h2 className="section-heading" tabindex="0">FOR MORE</h2>
			<div className="for-more-links-container">
				<a href="https://www.linkedin.com/in/jessica-panditha-4b676210a/" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer"><img className="social-media-icons-medium" src={LinkedinRed} alt="Mediumsized Linkedin icon in red"/></a>
				<a href="https://github.com/jespa374" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer"><img className="social-media-icons-medium" src={GithubRed} alt="Mediumsized GitHub icon in red"/></a>
				<a href="https://stackoverflow.com/c/technigo/users/148" tabindex="0" role="button" aria-pressed="false" target="_blank" rel="noopener noreferrer"><img className="social-media-icons-medium" src={StackoverflowRed} alt="Mediumsized stackoverflow icon in red"/></a>
			</div>
		</section>
	)};

export default Information;

