import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	background: #8BBE8A;
	height: 100%;
`;


export const Header = styled.div`
	display: flex;
	flex-direction: column;
	padding: 40px;
`;

export const CardContainer = styled.div`
	display: flex;
	align-items: center;
	/* justify-content: space-between; */

	padding-top: 32px;
`;

export const Tabs = styled.div`
	height: 100%;
`;

export const TabHeader = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;

	padding: 0 40px;
`;

export const TabTitle = styled.span`
	font-size: 16px;
	color: #fff;
	text-align: center;
	${({active}) => active && `
		font-weight: bold;
	`};

	&:hover {
		cursor: pointer;
	}
`;

export const TabContent = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	margin-top: 15px;
	padding: 40px;
	background: #fff;
	border-radius: 30px 30px 0px 0px;
`;

export const PokeInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
	padding-left: 25px;
`;

export const Image = styled.img`
	height: 125px;
	width: 125px;
`;

export const PokeNumber = styled.span`
	font-weight: bold;
	font-size: 16px;
	color: rgba(23, 23, 27, 0.6);
`;

export const PokeName = styled.h1`
	font-weight: bold;
	font-size: 32px;
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
