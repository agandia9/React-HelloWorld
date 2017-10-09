//Import REACTDOM
import ReactDOM from 'react-dom';
//Import React and Component from the same lib using dec.ES6
import React, { Component } from 'react';
//Import CSS
import './App.css';

//Create first component using Class
class App extends Component {
	constructor(){
		super()
		this.state = {
			clicks: 0,
			name: 'Alex'
		}
	}
//Method handleClick
	handleClick = () =>{
  		console.log('click!')
  		this.setState((prevState)=>{
  			return {
  				clicks: prevState.clicks+ 1
  			}
  		})
  	}
  render() {
	return (
	<div>
		<h1>Welcome to React, {this.props.helloTo}</h1>
		<button onClick={this.handleClick}>click me!</button>
		<p> clicks => {this.state.clicks}</p>
	</div>
	);
  }
}

//Render the component with ReactDOM
ReactDOM.render(<App helloTo="Alex"/>, document.getElementById('root'));
