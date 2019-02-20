import React from 'react';
import '../styles/footer.css';
import './FooterButton';
import FooterButton from './FooterButton';

export default function Footer() {
	return (
		<div className="footer">
			<p>
				You can find more info here:
				<a href="#"> www.mywebsite.com </a>
			</p>
			<p> All rights reserved &copy; 2019</p>
			<FooterButton />
		</div>
	);
}
