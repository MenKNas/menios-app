import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Contacts from './Components/Contacts';
import MainContent from './Components/MainContent';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<div className="main-part">
					<MainContent />
					<Contacts />
				</div>
				<Footer />
			</div>
		);
	}
}

export default App;
