import styled from 'styled-components';

export const PokeData = styled.div`
	display: flex;
	flex-direction: column;

	& + div {
		margin-top: 25px;
	}
`;

export const Title = styled.h3`
	font-weight: bold;
	font-size: 16px;
	color: #62B957;
	padding-bottom: 22px;
`;

export const Content = styled.ul``;

export const Items = styled.li`
	display: flex;
	align-items: center;
`;

export const ItemTitle = styled.span`
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;

	color: #17171B;
	margin: 10px 0px;
	width: 85px;
	height: 14px;
	margin-right: 10px;
`;

export const ItemContent = styled.span`
	font-weight: normal;
	font-size: 16px;
	line-height: 19px;

	color: #747476;
	margin: 10px 0px;
	width: 100%;
`;

export const Info = styled.span`
	font-weight: 500;
	font-size: 12px;
	line-height: 14px;

	color: #747476;
	margin-bottom: 30px;
`;