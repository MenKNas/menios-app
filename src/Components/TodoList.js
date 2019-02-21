import React, { Component } from 'react';
import TodoItem from './TodoItem';

export default class TodoList extends Component {
	constructor() {
		super();

		this.state = {
			todos: [ 'Pay the rent', 'Go to the movies', 'Play some Fortnite', 'Walk the dog', 'Clean the bathroom' ]
		};
	}

	render() {
		return (
			<div>
				<h2> To do List </h2>
				{this.state.todos.map((todo) => {
					return <TodoItem todo={todo} />;
				})}
				<input type="text" placeholder="Add new todo" className="todo-input" />
			</div>
		);
	}
}
