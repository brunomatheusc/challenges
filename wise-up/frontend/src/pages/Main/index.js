import React from 'react';
import { MdSearch } from 'react-icons/md';

import { Container, Header, Wrapper, Title, Text, InputGroup, Input } from './styles';
import CardList from '../../components/CardList';

export default function Main() {
	return (
		<>
			<Container>
				<Wrapper>
					<Header>
						<Title>Pokédex</Title>
						<Text>Search for Pokémon by name or using the National Pokédex number.</Text>

						<InputGroup>
							<Input placeholder="What Pokémon are you looking for?"/>
							<MdSearch size={16} color="#747476" />
						</InputGroup>
					</Header>

					<CardList />
				</Wrapper>
			</Container>
		</>
	);
}