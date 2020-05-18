import React from 'react';

import { Container, Title, EvolutionContainer, PokeInfo, PokeLevel, Image, PokeName, PokeNumber } from './styles';

import img1 from '../../assets/pokemons/bulbasaur.svg';
import img2 from '../../assets/pokemons/ivysaur.svg';
import img3 from '../../assets/pokemons/venusaur.svg';

export default function Evolution() {
	return (
		<>
			<Container>
				<Title>Evolution Chart</Title>

				<EvolutionContainer>
					<PokeInfo>
						<Image src={ img1 }/>
						<PokeNumber>#001</PokeNumber>
						<PokeName>Bulbasaur</PokeName>
					</PokeInfo>

					<PokeLevel>(Level 16)</PokeLevel>

					<PokeInfo>
						<Image src={ img2 }/>
						<PokeNumber>#002</PokeNumber>
						<PokeName>Ivysaur</PokeName>
					</PokeInfo>
				</EvolutionContainer>

				<EvolutionContainer>
					<PokeInfo>
						<Image src={ img2 }/>
						<PokeNumber>#002</PokeNumber>
						<PokeName>Ivysaur</PokeName>
					</PokeInfo>

					<PokeLevel>(Level 32)</PokeLevel>

					<PokeInfo>
						<Image src={ img3 }/>
						<PokeNumber>#003</PokeNumber>
						<PokeName>Venusaur</PokeName>
					</PokeInfo>
				</EvolutionContainer>
			</Container>
		</>
	);
}