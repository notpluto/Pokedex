import React from 'react';
import Display from './Display'

export default class Main extends React.Component {
	state = {
		input : "",
		pokes: []
	}
	handleChange = (e) => {
		// console.log('called')
		this.setState({input: e.target.value})
		// console.log(e.target.value)
	}
	componentDidMount = () => {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=200')
			.then(res => res.json())
			.then(({results}) => this.setState({pokes: results})) 			
	}

	render() {
		// const {pokes} = this.state; 
		return (
			<React.Fragment>
				<div className="wrapper">
					<input type="text" placeholder="Enter Pokemon name" className="input-box" onChange={this.handleChange}/>
					<Display pokes={this.state.pokes} search={this.state.input}/>
				</div>
			</React.Fragment>
		)
	}
}