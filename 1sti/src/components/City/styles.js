import styled from 'styled-components';

export const Container = styled.div`
	background-color: #fff;
	border-radius: 2px;
	padding: 10px 20px;
`;

export const Wrapper = styled.div`
	margin-left: 20px;
`;

export const Header = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	svg:hover {
		cursor: pointer;
	}
`;

export const WeatherCity = styled.span`
	font-weight: bold;
	color: #000;
`;

export const WeatherNow = styled.div`
	padding: 20px 0;
	font-weight: bold;
	font-size: 42px;
	color: #000;
`;

export const WeatherList = styled.ul`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-row-gap: 20px;
	margin-bottom: 20px;
`;

export const Weather = styled.div`
	display: flex;
	align-items: center;

	strong {
		color: #000;
	}
`;

export const WeatherInfo = styled.div`
    display: flex;

	${Weather} + ${Weather} {
		padding-left: 10px;
	}
`;

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