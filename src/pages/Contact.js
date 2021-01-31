import React from 'react';
import { Link } from 'react-router-dom';

const Contact = () => {

	return (
		<>
			<footer className="contact-section">
				<Link className="back-link" to="/" exact="true">
					<svg 
						xmlns="http://www.w3.org/2000/svg"
						height="20px"
						width="30px" 
						viewBox="0 0 30 30">
						<path d="M27 14.5C27 7.596441 21.4035594 2 14.5 2S2 7.596441 2 14.5 7.5964406 27 14.5 27 27 21.403559 27 14.5zm-19.3388348-.353553l7.4852814-7.485282c.1952622-.195262.5118446-.195262.7071068 0l2.1213203 2.121321c.1952622.195262.1952622.511844 0 .707106L12.9644661 14.5l5.0104076 5.010408c.1952622.195262.1952622.511844 0 .707106l-2.1213203 2.121321c-.1952622.195262-.5118446.195262-.7071068 0l-7.4852814-7.485282c-.19799-.19799-.197989-.509117 0-.707106z" fill="#fff" fill-rule="evenodd">
						</path>
					</svg>
					Back
				</Link>
				<h3 className="contact-heading" tabindex="0">CONTACT</h3>
				<p className="contact-name" tabindex="0">Jessica Panditha</p>
				<p className="contact-info" tabindex="0">+46 701 456 579</p>
				<a className="contact-info" tabindex="0" href="mailto:jessica.panditha@gmail.com" target="_blank" rel="noopener noreferrer">jessica.panditha@gmail.com</a>
				<div className="contact-form">
					<form>
						<h2 className="contact-form-header">If you would like to know more don't hesitate to contact me by filling the following form</h2>
						<ul>
							<li>
								<input type="text" placeholder="Name"/>
								<label></label>
							</li>
							<li>
								<input type="email" placeholder="E-mail"/>
								<label></label>
							</li>
							<li>
								<input type="text" placeholder="Subject"/>
								<label></label>
							</li>
							<li>
								<textfield className="contact-form text-area" type="textarea" placeholder="Message">
								</textfield>
								<label></label>
							</li>
						</ul>
						<input type="submit"/>
					</form>
				</div>
			</footer>
		</>
	)};

export default Contact;