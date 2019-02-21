import React, { Component } from 'react';
import '../styles/counter.css';

export default class CounterComponent extends Component {
	constructor() {
		super();

		this.increaseCounter = this.increaseCounter.bind(this);
		this.resetCounter = this.resetCounter.bind(this);

		this.state = {
			numberOfHovers: 0
		};
	}

	increaseCounter() {
		this.setState((prevState) => {
			return {
				numberOfHovers: prevState.numberOfHovers + 1
			};
		});
	}

	resetCounter() {
		this.setState((prevState) => {
			return {
				numberOfHovers: prevState.numberOfHovers * 0
			};
		});
		this.changeBg();
	}

	changeBg() {
		document.querySelector('.counter-component').style.backgroundColor = 'red';
	}
	render() {
		return (
			<div className="counter-component" onMouseOver={this.increaseCounter}>
				Number of Times hovered over this component : <h4>{this.state.numberOfHovers} </h4>
				<button class="ct-btn" onClick={this.resetCounter}>
					Reset
				</button>
			</div>
		);
	}
}
