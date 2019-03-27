import React from 'react';
import Main from './Main';

export default class Display extends React.Component {

	render() {
		const {pokes} = this.props;
		// console.log(this.state.pokes)
		return (
			<div className="container">
			{
				pokes.map((poke, index) =>  <Poke pokeInfo={poke} index= {index+1} />)
			}
			</div>
		)
	}
}

function Poke(props) {
	// const {name} = props.pokeInfo;
	// console.log(name, props.index)
	return (
		<React.Fragment>
			<div style={{border: '1px solid green', margin: '2rem', background: 'gray'}}>
				<h4>{props.pokeInfo.name}</h4>
				<img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${props.index}.png`} />
			</div>
		</React.Fragment>
	)
}
