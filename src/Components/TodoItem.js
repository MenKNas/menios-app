import React, { Component } from 'react';

export default class TodoItem extends Component {
	render() {
		return (
			<div>
				<h4 className={this.props.completed ? 'completed' : ''}>
					{this.props.title}
					{this.props.priorety === 'High' ? <span> &#127919; </span> : <span> &#127850; </span>}
				</h4>
				<p> </p>
				<button
					onClick={() => {
						this.props.deleteTodo(this.props.key);
					}}
				>
					X
				</button>
			</div>
		);
	}
}
