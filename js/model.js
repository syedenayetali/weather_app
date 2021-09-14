import * as CONF from "./CONF.js"

export const weatherData = async function (cityName) {
    const apiCall = await fetch(`${CONF.API_URL}q=${cityName}&appid=${CONF.API_KEY}`).then((res) => res.json()).then((data) => data);

    return {
        weather: apiCall.weather,
        country: apiCall.sys.country,
        city: apiCall.name,
        weatherCond: apiCall.weather[0].main,
        weatherDisc: apiCall.weather[0].description,
        maxTemp: apiCall.main.temp_max,
        minTemp: apiCall.main.temp_min,
        humidity: apiCall.main.humidity,
        wind: apiCall.wind.speed,
        sea: apiCall.main.sea_level,
        lon: apiCall.coord.lon,
        lat: apiCall.coord.lat
    }
}

