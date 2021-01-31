import React from 'react';

const ThoughtCard = ({ ...thought }) => {

	return (
		<div className="latest-thought-card">
			<img className="thoughts-image" src={thought.imageUrl} alt="Girl walking far away"/>
			<span className="date-heading" /*class="latest-day-heading"*/ tabindex="0">{thought.date}</span>
			<h3 tabindex="0">{thought.title} </h3>
			<p className="latest-thought" tabindex="0">{thought.introduction}<a href ={thought.url} class="see-more-icon">>></a> 
			</p>
		</div>
	)};

export default ThoughtCard;