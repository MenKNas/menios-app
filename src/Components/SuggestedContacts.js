import React from 'react';
import '../styles/suggestions.css';
import suggestedContactsData from '../data/suggested-contacts-data';
import SingleContact from './SingleContact';

export default class SuggestedContacts extends React.Component {
	constructor() {
		super();

		this.state = {
			myName: 'George',
			loggedIn: false,
			suggestedContactsList: suggestedContactsData
		};
	}
	myGetDate() {
		const date = new Date();
		return (
			<span className="date-span">
				<span role="img" aria-label="Emoji">
					&#128197;
				</span>
				{date.getDate()} / {date.getMonth() + 1} / {date.getFullYear()}
			</span>
		);
	}
	render() {
		return (
			<div className="contact-suggestions contacts-card">
				<h2>
					Contact Suggestions <br />(for {this.state.myName})
					{this.state.loggedIn ? <span> &#10004; </span> : <span> &#10006; </span>}
				</h2>
				<p> {this.myGetDate()} </p>
				<hr />
				<div>
					{this.state.suggestedContactsList.map((suggestion) => {
						return (
							<ul className="contacts-list">
								<li>
									<SingleContact
										key={suggestion.id}
										img={suggestion.img}
										name={suggestion.name}
										lastname={suggestion.lastname}
										email={suggestion.email}
										address={suggestion.address}
									/>
								</li>
							</ul>
						);
					})}
				</div>
			</div>
		);
	}
}
