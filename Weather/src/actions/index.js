import axios from 'axios';
import { Globals } from "../helpers/globals";

export const FETCH_WEATHER = "FETCH_WEATHER";
export const ROOT_URL = "http://api.openweathermap.org/data/2.5/forecast?appid=" + Globals.API_KEY;

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},au`;
    const request = axios.get(url).catch(() => {
        return {
            type: FETCH_WEATHER,
            payload: {}
        }
    });
    
    console.log("Request: ", request);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}