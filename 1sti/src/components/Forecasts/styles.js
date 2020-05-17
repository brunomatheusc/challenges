import styled from 'styled-components';


export const WeatherDays = styled.div`
	padding: 20px;
	border-top: 1px solid #ff7f00;
	display: flex;
	align-items: center;
	justify-content: space-between
`;

export const NextDaysContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Title = styled.h3`
	font-size: 16px;
	font-weight: bold;
	color: #000;
`;

export const NextDaysWeather = styled.div`
	display: flex;
	align-items: center;
	color: #ff7f00;

	span {
		margin-top: 5px;
		color: #ff7f00;
		font-weight: bold;
	}
`;