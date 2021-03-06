import axios from 'axios';

const API_KEY = 'ef5653496a7132e547b03a7ddb6da3c4';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?&appid=${API_KEY}`;

// action creator always return an action
// an action is an object which always has a type

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);  // take this url and make a get request on it
	
	
	return {
		type: FETCH_WEATHER,
		payload: request
	};
}