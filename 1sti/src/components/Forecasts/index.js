import React from 'react';

import { WeatherDays, NextDaysContainer, Title, NextDaysWeather } from './styles';

function Forecasts({ forecast }) {
	return (
		<WeatherDays>
		{ forecast.slice(0, 5).map(next => (
			<NextDaysContainer>
				<Title>Terça</Title>
				<NextDaysWeather>
					<span>18°</span>
					<span>26°</span>
				</NextDaysWeather>
			</NextDaysContainer>
		))}
		</WeatherDays>
  );
}

export default Forecasts;