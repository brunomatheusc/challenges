import React from 'react';

import { Container } from './styles';
import CardItem from '../CardItem';

import img1 from '../../assets/pokemons/bulbasaur.svg';
import img2 from '../../assets/pokemons/ivysaur.svg';
import img3 from '../../assets/pokemons/venusaur.svg';

export default function CardList() {
	const pokemons = [
		{id: 0, number: '#001', name: 'Bulbasaur', image: img1},
		{id: 1, number: '#002', name: 'Ivysaur', image: img2},
		{id: 2, number: '#003', name: 'Venosaur', image: img3},
	];

	return (
		<>
			{ pokemons.map(pokemon => (
				<Container key={ pokemon.id }>
					<CardItem pokemon={ pokemon} />
				</Container>
			))}
		</>
	);
}