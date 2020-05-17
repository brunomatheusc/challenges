import React from 'react';
import { MdClose, MdArrowDownward, MdArrowUpward } from 'react-icons/md';

import {codes, weekDays} from '../../utils/translate';

import {
	Container, Wrapper, Header, WeatherCity, WeatherNow, WeatherList, WeatherInfo, Weather,
	WeatherDays, NextDaysContainer, Title, NextDaysWeather
} from './styles';

export default function City({ city }) {
	const { location, current_observation: current, forecasts } = city;
	const conditionText = codes[current.condition.code].pt || '';

    return (
        <Container>
			<Wrapper>
				<Header>
					<WeatherCity>{ `${location.city}, ${location.region} - ${location.country}`}</WeatherCity>
					<MdClose size={20} color="#ff7f00" />
				</Header>

				<WeatherNow>{`${current.condition.temperature}° ${conditionText}`}</WeatherNow>

				<WeatherList>
					<li>
						<WeatherInfo>
							<Weather>
								<MdArrowDownward size={24} color="#ff7f00" />
								<strong>{ `${forecasts[0].low}°` }</strong>
							</Weather>

							<Weather>
								<MdArrowUpward size={24} color="#ff7f00" />
								<strong>{ `${forecasts[0].high}°` }</strong>
							</Weather>
						</WeatherInfo>
					</li>

					<li><Weather>Sensação&nbsp;<strong>{ `${current.wind.chill}°`}</strong></Weather></li>
					<li><Weather>Vento&nbsp;<strong>{ `${current.wind.speed}km/h`}</strong></Weather></li>
					<li><Weather>Umidade&nbsp;<strong>{`${current.atmosphere.humidity}%`}</strong></Weather></li>
				</WeatherList>
			</Wrapper>

			<WeatherDays>
			{ forecasts.slice(1, 6).map(forecast => (
				<NextDaysContainer key={ forecast.date }>
					<Title>{ weekDays[forecast.day] }</Title>
					<NextDaysWeather>
						<span>{ `${forecast.low}°` }</span>
						<span>{ `${forecast.high}°` }</span>
					</NextDaysWeather>
				</NextDaysContainer>
			))}
			</WeatherDays>
        </Container>
    );
}