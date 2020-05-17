import React from 'react';

import { Card, Image, PokeInfoContainer, PokeNumber, PokeName, BadgeContainer, Badge } from './styles';

import badge1 from '../../assets/badges/grass.svg';
import badge2 from '../../assets/badges/poison.svg';

import pattern from '../../assets/vectors/pattern.svg';
import pokeball from '../../assets/vectors/pokeball.svg';

function CardItem({ pokemon }) {
	return (
		<Card>
			<PokeInfoContainer>
				<PokeNumber>{ pokemon.number }</PokeNumber>
				<PokeName>{ pokemon.name }</PokeName>

				<BadgeContainer>
					<Badge src={badge1} />
					<Badge src={badge2} />
				</BadgeContainer>
			</PokeInfoContainer>

			<Image src={pattern} alt="" right={170} top={35} width={74} height={32} />
			<Image src={pokeball} alt="" right={-10} top={7} width={145} height={145} />
			<Image src={ pokemon.image } alt="" right={10} top={0} width={130} height={130} />
		</Card>
	);
}

export default CardItem;