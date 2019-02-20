import React from 'react';

export default function SingleContact(props) {
	return (
		<div className="single-card">
			<img src={props.img} alt="" />
			<p className="main-info">
				{props.name ? props.name : <h6 className="name-error"> X </h6>}{' '}
				{props.lastname ? props.lastname : <h6 className="name-error"> X </h6>}
				<button
					class="contact-alert-btn"
					onClick={function() {
						alert(props.name + ' ' + props.lastname + ' ' + '\n' + props.email + ' ' + props.address);
					}}
				>
					{' '}
					Alert Info{' '}
				</button>
				<button
					class="delete-btn"
					onClick={function() {
						alert('This functionality is not yet implemented');
					}}
				>
					{' '}
					Delete Contact{' '}
				</button>
			</p>
			<p className="secondary-info">
				<strong>email: </strong>
				{props.email} | <strong>address:</strong> {props.address}
			</p>
		</div>
	);
}
