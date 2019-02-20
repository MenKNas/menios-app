import React from 'react';
import SingleContact from './SingleContact';
import contactData from '../data/contact-data';

export default function Contacts() {
	const contactComponents = contactData.map((contact) => {
		return (
			<li>
				<SingleContact
					key={contact.id}
					img={contact.img}
					name={contact.name}
					lastname={contact.lastname}
					email={contact.email}
					address={contact.address}
				/>
			</li>
		);
	});

	const filteredComponents = contactData
		.filter((filteredItem) => filteredItem.name.length > 5)
		.map((filteredContact) => {
			return (
				<li>
					<SingleContact
						key={filteredContact.id}
						img={filteredContact.img}
						name={filteredContact.name}
						lastname={filteredContact.lastname}
						email={filteredContact.email}
						address={filteredContact.address}
					/>
				</li>
			);
		});

	return (
		<div className="contacts-card">
			<h2> My Contacts ({contactComponents.length})</h2>
			<hr />
			<ul className="contacts-list"> {contactComponents} </ul> <h2> Filtered Contacts </h2>
			<ul className="filtered-list"> {filteredComponents} </ul>{' '}
		</div>
	);
}
