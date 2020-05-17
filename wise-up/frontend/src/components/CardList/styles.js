import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	position: relative;
	align-items: flex-end;
	height: 140px;
	margin-top: 20px;
`;

export const Card = styled.div`
	height: 115px;
	background-color: #8BBE8A;
	/* background: linear-gradient(180deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0) 100%); */
	border-radius: 10px;

	display: flex;
	flex-direction: row;
	flex: 1;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

export const PokeInfoContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Image = styled.img`
	position: absolute;
	height: ${({height}) => height && height != 0 ? `${height}px` : 0};
	width: ${({width}) => width && width != 0 ? `${width}px` : 0};
	right: ${({right}) => right && right != 0 ? `${right}px` : 0};
	top: ${({top}) => top && top != 0 ? `${top}px` : 0};
`;

export const PokeballImage = styled.img`
	position: absolute;
	height: 130px;
	width: 130px;
	right: 10px;
	top: 0;
`;

export const PatternImage = styled.img`
	position: absolute;
	height: 130px;
	width: 130px;
	right: 10px;
	top: 0;
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