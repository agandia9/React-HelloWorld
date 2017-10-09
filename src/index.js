//Import REACTDOM
import ReactDOM from 'react-dom';
//Import React and Component from the same lib using dec.ES6
import React, { Component } from 'react';
//Import CSS
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

//Create first component using Class
class App extends Component {
	constructor(){
		super()
		this.state = {
			clicks: 0,
			name: 'Alex',
			text: '',
			items:[]
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

  	handleSubmit = (event) => {
  		event.preventDefault()
  		if(!this.state.text.length)return;
  		const item = {
  			id: Date.now(),
  			text: this.state.text
  		}
  		this.setState((prevState)=>{
  			return{
  				items: prevState.items.concat(item),
  				text: ''
  			}
  		})
  	}

  	handleChange = (event) => {
  		this.setState({
  				text: event.target.value}
  			)}


  render() {
	return (
	<div className="jumbotron">
		<h1>Welcome to React, {this.props.helloTo}</h1>
		<button onClick={this.handleClick}>click me!</button>
		<p> clicks => {this.state.clicks}</p>
		<form onSubmit={this.handleSubmit}>
			<input onChange={this.handleChange}/>
			<button>Add new to-do</button>
		</form>
		<TodoList items={this.state.items} />
	</div>
	);
  }
}

class TodoList extends Component {
	render(){
		return <ul>
			{this.props.items.map((item)=> {
					return <li key={item.id}> {item.text} </li>
				})}
			</ul>
	}
}

//Render the component with ReactDOM
ReactDOM.render(<App helloTo="Alex"/>, document.getElementById('root'));



