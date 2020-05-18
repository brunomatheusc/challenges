import React from 'react';

import { Bio, PokeData, Title, Content, Items, ItemTitle, ItemContent } from './styles';

export default function About() {
	const pokedexData = [
		{ id: 0,title: 'Species', content: 'Seed Pokémon'},
		{ id: 1,title: 'Height', content: '0.7m (2′04″)'},
		{ id: 2,title: 'Weigth', content: '6.9kg (15.2 lbs)'},
		{ id: 3,title: 'Abilities', content: `1. Overgrow\nChlorophyll (hidden ability)`},
		{ id: 4,title: 'Weaknesses', content: 'Seed Pokémon'},
	];

	const training = [
		{ id: 0, title: 'EV Yield', content: '1 Special Attack'},
		{ id: 1, title: 'Catch Rate', content: '45 (5.9% with PokéBall, full HP)'},
		{ id: 2, title: 'Base Friendship', content: '70 (normal)'},
		{ id: 3, title: 'Base Exp', content: '64'},
		{ id: 4, title: 'Growth Rate', content: 'Medium Slow'},
	];
	return (
		<>
			<Bio>Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger.</Bio>

			<PokeData>
				<Title>Pokédex Data</Title>

				<Content>
				{ pokedexData.map((data) => (
					<Items key={ data.id }>
						<ItemTitle>{ data.title }</ItemTitle>
						<ItemContent>{ data.content }</ItemContent>
					</Items>
				))}
				</Content>
			</PokeData>

			<PokeData>
				<Title>Training</Title>

				<Content>
				{ training.map((data) => (
					<Items key={ data.id }>
						<ItemTitle>{ data.title }</ItemTitle>
						<ItemContent>{ data.content }</ItemContent>
					</Items>
				))}
				</Content>
			</PokeData>
		</>
	);
}