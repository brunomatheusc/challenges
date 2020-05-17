import React from 'react';

import { Container } from './styles';
import CardItem from '../CardItem';

import img1 from '../../assets/pokemons/bulbasaur.svg';
import img2 from '../../assets/pokemons/ivysaur.svg';
import img3 from '../../assets/pokemons/venusaur.svg';

export default function CardList() {
	const pokemons = [
		{number: '#001', name: 'Bulbasaur', image: img1},
		{number: '#002', name: 'Ivysaur', image: img2},
		{number: '#003', name: 'Venosaur', image: img3},
	];

	return (
		<>
			{ pokemons.map(pokemon => (
				<Container>
					<CardItem pokemon={ pokemon} />
				</Container>
			))}
		</>
	);
}