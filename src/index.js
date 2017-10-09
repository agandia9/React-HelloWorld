//Import REACTDOM
import ReactDOM from 'react-dom';
//Import React and Component from the same lib using dec.ES6
import React, { Component } from 'react';
//Import CSS
import './App.css';

//Create first component using Class
class App extends Component {
  render() {
  	let myName = 'Alex'
	return (
	<div>
		<h1>Welcome to React, {myName}</h1>
	</div>
	);
  }
}

//Render with ReactDOM
ReactDOM.render(<App />, document.getElementById('root'));
