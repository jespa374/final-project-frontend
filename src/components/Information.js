import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

import 'lib/InformationStyles.css';

const Information = () => {

	return (
		<section className="information" id="information">
			<h2 className="section-heading" tabindex="0">FOR MORE</h2>
			<div className="for-more-links-container">
				<a 
					href="https://www.linkedin.com/in/jessica-panditha-4b676210a/" 
					tabindex="0" 
					role="button" 
					aria-pressed="false" 
					target="_blank" 
					rel="noopener noreferrer">
					<div className="icon-linkedin-red"></div>
				</a>
				<a 
					href="https://github.com/jespa374" 
					tabindex="0" 
					role="button" 
					aria-pressed="false" 
					target="_blank" 
					rel="noopener noreferrer">
					<div className="icon-github-red"></div>
				</a>
				<a 
					href="https://stackoverflow.com/c/technigo/users/148" 
					tabindex="0" 
					role="button" 
					aria-pressed="false" 
					target="_blank" 
					rel="noopener noreferrer">
					<div className="icon-stackoverflow-red"></div>
				</a>
			</div>
			<button 
				className="button" 
				onClick={() => scroll.scrollToTop()}>
				Back to top
			</button>
		</section>
	)};

export default Information;

