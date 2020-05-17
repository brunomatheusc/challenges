import React from 'react';

import { Container, List, HeaderList } from './styles';

export default function CapitalListItem({ capitals }) {
	return (
		<Container>
			<HeaderList>
				<li>Min</li>
				<li>Max</li>
			</HeaderList>

		{ capitals.map(capital => (
			<List key={capital}>
				<li><strong>18º</strong></li>
				<li><strong>27º</strong></li>
				<li><strong>{capital}</strong></li>
			</List>
		))}
		</Container>
	);
}