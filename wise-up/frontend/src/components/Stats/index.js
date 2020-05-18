import React from 'react';

import { PokeData, Title, Content, Items, ItemTitle, ItemContent, Info } from './styles';

function Stats() {
	const baseStats = [
		{ id: 0, title: 'HP', content: '45'},
		{ id: 1, title: 'Attack', content: '49'},
		{ id: 2, title: 'Deffense', content: '49'},
		{ id: 3, title: 'Sp. Atk', content: '65'},
		{ id: 4, title: 'Sp. Def', content: '65'},
		{ id: 5, title: 'Speed', content: '45'},
		{ id: 6, title: 'Total', content: '318'},
	];

	return (
		<PokeData>
			<Title>Base Stats</Title>

			<Content>
			{ baseStats.map((stat) => (
				<Items key={ stat.id }>
					<ItemTitle>{ stat.title }</ItemTitle>
					<ItemContent>{ stat.content }</ItemContent>
				</Items>
			))}
			</Content>

			<Info>The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.</Info>
		</PokeData>
	);
}

export default Stats;