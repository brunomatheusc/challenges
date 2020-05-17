import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #8BBE8A;
	height: 100%;

	svg {
		/* padding: 40px; */
	}
`;


export const Header = styled.div`
	display: flex;
	flex-direction: column;
`;

export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Tabs = styled.div`

`;

export const TabHeader = styled.div`

`;

export const TabTitle = styled.div`

`;

export const PokeInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Image = styled.img`
	height: 125px;
	width: 125px;
`;

export const PokeNumber = styled.span`
	font-weight: bold;
	font-size: 12px;
	color: rgba(23, 23, 27, 0.6);
`;

export const PokeName = styled.h1`
	font-weight: bold;
	font-size: 26px;
	line-height: 31px;

	color: #FFFFFF;
`;

export const BadgeContainer = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

export const Badge = styled.img`
	height: 25px;
	width: 61px;

	& + img {
		margin-left: 5px;
	}
`;