import React from 'react';
import Main from './Main';

export default class Display extends React.Component {

	render() {
		const {pokes} = this.props;
		console.log(pokes)
		return (
			<div className="container">
			{
				pokes.map((poke, index) =>  <Poke pokeInfo={poke} />)
			}
			</div>
		)
	}
}

function getURL(string)  {
		var t = string.split('/', string.length);
		return Number(t[t.length-2])
	}

function Poke(props) {
	// const {name} = props.pokeInfo;
	// console.log(props.pokeInfo.url)
	console.log(getURL(props.pokeInfo.url))
	return (
		<React.Fragment>
			<div style={{border: '1px solid green', margin: '2rem', background: '#EEEEEE'}}>
				<img src= {`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getURL(props.pokeInfo.url)}.png`} />
				<h4 style={{background: '#777777'}}>{props.pokeInfo.name}</h4>
			</div>
		</React.Fragment>
	)
}
