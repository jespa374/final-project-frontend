import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll'; 

import {MESSAGES_URL} from '../urls';
import 'lib/ContactsStyles.css';

const Contact = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [telephone, setTelephone] = useState();
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');

	const postContact = (event) => {
		event.preventDefault();
		fetch(MESSAGES_URL, {
			method: 'POST',
			body: JSON.stringify({name, email, telephone, subject, message}),
			headers: {'Content-Type': 'application/json'},
		})
		.then((res => {
			if (!res.ok) {
				throw new Error ('Could not post contact');
			} return res.json;
			//check why you can't empty the fields doing
			//setMessage('') 
		}));
	};

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
				<a href="tel://0701456579" className="contact-info" tabindex="0">+46 701 456 579</a>
				<a className="contact-info" tabindex="0" href="mailto:jessica.panditha@gmail.com" target="_blank" rel="noopener noreferrer">jessica.panditha@gmail.com</a>
				<div className="contact-form-container">
					<form className="contact-form" onSubmit={postContact}>
						<h2 className="contact-form-header">If you would like to know more don't hesitate to contact me by filling the following form</h2>
								<label>Name</label>
								<input 
									required
									type="text" 
									placeholder="Name" 
									value={name}
									onChange={e => setName(e.target.value)}
								/>
								<label>E-mail</label>
								<input
									required 
									type="email" 
									placeholder="E-mail" 
									value={email}
									onChange={e => setEmail(e.target.value)}	
								/>
								<label>Telephone</label>
								<input
									type="number" 
									placeholder="Telephone" 
									value={telephone}
									onChange={e => setTelephone(e.target.value)}
									className="telephone-input"	
								/>
								<label>Subject</label>
								<input 
									type="text" 
									placeholder="Subject" 
									value={subject}
									onChange={e => setSubject(e.target.value)}
								/>
								<label>Message</label>
								<textarea 
									className="contact-form-text-area" 
									cols="50" 
									rows="4" 
									placeholder="Type your message here"
									value={message}
									onChange={e => setMessage(e.target.value)}
								>
								</textarea>
								<input type="submit" onClick={() => scroll.scrollToTop()}/>
							</form>
						</div>
				</footer>
			</>
		)};

export default Contact;