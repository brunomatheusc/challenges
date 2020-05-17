import React from 'react';
import { MdKeyboardBackspace } from 'react-icons/md';

import { Container, Header, CardContainer, Tabs, TabHeader, TabTitle, Image, PokeInfoContainer, PokeName, PokeNumber, Badge, BadgeContainer } from './styles';
import CardItem from '../../components/CardItem';

import img1 from '../../assets/pokemons/bulbasaur.svg';

import badge1 from '../../assets/badges/grass.svg';
import badge2 from '../../assets/badges/poison.svg';

export default function Profile() {
	const pokemon = {number: '#001', name: 'Bulbasaur', image: img1};

	return (
		<Container>
			<Header>
				<MdKeyboardBackspace size={25} color="#fff" />

				<CardContainer>
					<Image src={pokemon.image} alt=""/>

					<PokeInfoContainer>
						<PokeNumber>{ pokemon.number }</PokeNumber>
						<PokeName>{ pokemon.name }</PokeName>

						<BadgeContainer>
							<Badge src={badge1} />
							<Badge src={badge2} />
						</BadgeContainer>
					</PokeInfoContainer>

				</CardContainer>
			</Header>

			<Tabs>
				<TabHeader>
					<TabTitle>About</TabTitle>
					<TabTitle>Stats</TabTitle>
					<TabTitle>Evolution</TabTitle>
				</TabHeader>
			</Tabs>
		</Container>
	);
}