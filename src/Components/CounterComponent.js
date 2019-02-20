import React, { Component } from 'react';
import '../styles/counter.css';

export default class CounterComponent extends Component {
	constructor() {
		super();

		this.state = {
			numberOfHovers: 0
		};
	}

	increaseCounter() {
		return this.state.numberOfHovers++;
	}
	render() {
		return (
			<div className="counter-component">
				Number of Times hovered over this component : <h4>{this.state.numberOfHovers} </h4>
			</div>
		);
	}
}
