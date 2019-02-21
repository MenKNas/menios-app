import React, { Component } from 'react';
import TodoItem from './TodoItem';
import todosList from '../data/todos-list';

export default class TodoList extends Component {
	constructor() {
		super();

		this.deleteTodo = this.deleteTodo.bind(this);

		this.state = {
			todos: todosList
		};
	}

	deleteTodo(id) {
		this.setState((prevState) => {
			const updatedTodos = prevState.todos.map((todo) => {
				if (todo.id === id) {
					updatedTodos.pop(id);
				}
				return {
					todo
				};
			});
			return {
				todos: updatedTodos
			};
		});
	}

	render() {
		return (
			<div>
				<h2> To do List </h2>
				<hr />
				{this.state.todos.map((todo) => {
					return (
						<TodoItem
							key={todo.id}
							title={todo.title}
							priorety={todo.priorety}
							completed={todo.completed}
							deleteTodo={this.deleteTodo}
						/>
					);
				})}
				<input type="text" placeholder="Add new todo" className="todo-input" />
			</div>
		);
	}
}
