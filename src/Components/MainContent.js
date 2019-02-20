import React from 'react';
import TodoItem from './TodoItem';
import SuggestedContacts from './SuggestedContacts';
import CounterComponent from './CounterComponent';
import '../styles/todo-list.css';

function MainContent() {
	let name = '';
	let lastname = 'Nasies';

	let user = {
		name: 'Menelaos',
		lastname: 'Nasies',
		age: '27'
	};

	let randomFoods = [ 'Pizza', 'Spaggheti', 'Lasagna', 'Salad' ];

	let authorStyle = {
		color: 'red',
		fontSize: '20px',
		fontStyle: 'italic',
		border: '1px solid red',
		padding: '0.5%',
		width: '50%',
		margin: '1% auto'
	};

	if (name === 'Menios') {
		authorStyle.color = 'red';
		authorStyle.border = '1px solid red';
	} else {
		authorStyle.color = 'blue';
		authorStyle.border = '1px solid blue';
		name = 'Ooooo wait! You are not Menios';
		lastname = '';
	}
	return (
		<div>
			<h2> Hello World! </h2>
			<p style={authorStyle}>Author: {`${name} ${lastname}`}</p>
			<div className="todo-list">
				<h3> To Do List </h3>
				<TodoItem />
				<TodoItem />
				<TodoItem />
				<TodoItem />
			</div>
			<SuggestedContacts user={user} foods={randomFoods} />
			<CounterComponent />
		</div>
	);
}

export default MainContent;
