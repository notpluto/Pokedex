import React from 'react';
import Display from './Display'

export default class Main extends React.Component {
	state = {
		input : "",
		pokes: []
	}

	handleChange = (e) => {
		this.setState({input: e.target.value})
		// console.log(e.target.value)
		this.setState({pokes: this.state.pokes.filter(poke => poke.name.startsWith(e.target.value))})
	}

	componentDidMount = () => {
		fetch('https://pokeapi.co/api/v2/pokemon/?limit=500')
			.then(res => res.json())
			.then(({results}) => this.setState({pokes: results})) 			
	}

	render() {
		// const {pokes} = this.state; 
		return (
			<React.Fragment>
				<div className="wrapper">
					<input type="text" placeholder="Enter Pokemon name" className="input-box" onKeyPress={this.handleChange}/>
					<Display pokes={this.state.pokes} />
				</div>
			</React.Fragment>
		)
	}
}