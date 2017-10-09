//Import REACTDOM
import ReactDOM from 'react-dom';
//Import React and Component from the same lib using dec.ES6
import React, { Component } from 'react';
//Import CDSS
import './App.css';

//Create first component using Class
class App extends Component {
  render() {
	return (
	  <h1>Welcome to React World!</h1>
	);
  }
}

//Render with ReactDOM
ReactDOM.render(<App />, document.getElementById('root'));
