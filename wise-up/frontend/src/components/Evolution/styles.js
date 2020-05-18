import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h1`
	font-weight: bold;
	font-size: 16px;
	line-height: 19px;

	color: #62B957;
`;

export const EvolutionContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-top: 40px;

	& + div {
		padding-bottom: 40px;
	}
`;

export const PokeInfo = styled.div`
	display: flex;
	flex-direction: column;
`;

export const PokeLevel = styled.h3`
	font-style: normal;
	font-weight: bold;
	font-size: 12px;
	line-height: 14px;
	text-align: center;

	color: #17171B;
`;

export const Image = styled.img`
	width: 75px;
	height: 75px;
	padding-bottom: 12px;
`;

export const PokeName = styled.h1`
	font-style: normal;
	font-weight: bold;
	font-size: 16px;
	line-height: 19px;

	text-align: center;
	color: #17171B;
`;

export const PokeNumber = styled.span`
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;
	text-align: center;

	color: #747476;
`;