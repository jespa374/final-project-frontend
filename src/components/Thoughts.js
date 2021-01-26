import React from 'react';

import ThoughtsImage from '../assets/thoughts.jpg';
import ComputerImage from '../assets/computer.png';

const Thoughts = () => {
	
	return (
		<section className="thoughts">
			<h2 className="section-heading" tabindex="0">MY THOUGHTS</h2>
			<div className="latest-thought-container">
				<div className="latest-thought-card">
					<img className="thoughts-image" src={ThoughtsImage} alt="Girl walking far away"/>
						<span className="date-heading" /*class="latest-day-heading"*/ tabindex="0">NOV 2020</span>
						<h3 tabindex="0"> My first introduction to the world of coding</h3>
						<p className="latest-thought" tabindex="0">Few months ago I took a huge step in my life and started a coding boot camp. Now that I am half way through the boot camp I started thinking about how I was introduced to coding…<a href ="https://medium.com/@jessica.panditha/my-first-introduction-to-the-world-of-coding-e7ba1ce368f0" class="see-more-icon">>></a> 
						</p>
				</div>
			<div className="latest-thought-card">
				<img className="thoughts-image" src={ComputerImage} alt="a computer with code"/>
				<span className="date-heading" /*class="latest-day-heading"*/ tabindex="0">OCT 2020</span>
				<h3 tabindex="0"> Is coding black or white?</h3>
				<p className="latest-thought" tabindex="0">Before starting my coding journey I thought about coding in a black and white way where there is only right or wrong.
						I realized that that is only half the truth. There are always so many ways to solve one problem when you code so in that case there is not one correct solution. 
						However different solutions can vary in how readable the code is, if it's applicable only in that specific problem or in many other situations. <button className="see-more-icon">>></button> 
				</p>
			</div>
		</div>
		<article className="more-thoughts-subsection">
			<h3 className="section-subheading" tabindex="0">MORE THOUGHTS</h3>
			<p tabindex="0"><span className="date-heading">SEP 2019.</span>To be added <button className="see-more-icon">>></button></p>
			<p tabindex="0"><span className="date-heading">SEP 2019.</span>To be added <button className="see-more-icon">>></button></p>
			<p tabindex="0"><span className="date-heading">SEP 2019.</span>To be added <button className="see-more-icon">>></button> </p>
			<p tabindex="0"><span className="date-heading">SEP 2019.</span>To be added <button className="see-more-icon">>></button></p>
		</article>
	</section>
)};


export default Thoughts;

	//replace buttons with a hrefs in line 29-32 for more thoughts links and for the see more button in line 22