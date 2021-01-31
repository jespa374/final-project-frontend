import React, { useState, useEffect } from 'react';

import { THOUGHTS_URL } from '../urls';
import ThoughtCard from '../components/ThoughtCard';
import MoreThoughts from './MoreThoughts';

const Thoughts = () => {
	const [thoughts, setThoughts] = useState([]);

	const getThoughts = () => {
		fetch(THOUGHTS_URL)
		.then(res => res.json())
		.then(json => setThoughts(json))
		.catch(error => console.error(error)) 
	};

	useEffect(getThoughts, []);
	console.log(thoughts);
	
	return (
		<section className="thoughts">
			<h2 className="section-heading" tabindex="0">MY THOUGHTS</h2>
			<div className="latest-thought-container">
				{thoughts.filter(thought => thought.isFeatured).map(thought =>
					<ThoughtCard 
						key={thought._id}
						{...thought}
					/>
				)}
			</div>
			<article className="more-thoughts-subsection">
				<h3 className="section-subheading" tabindex="0">MORE THOUGHTS</h3>
				{thoughts.filter(thought => !thought.isFeatured).map(thought =>
					<MoreThoughts 
						key={thought._id}
						{...thought}
					/>
				)}
			</article>	
		</section>
	)};


export default Thoughts;

	