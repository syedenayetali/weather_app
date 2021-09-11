const cityName = document.getElementById('name');
const searchButton = document.getElementById('search');
const disc = document.querySelector('.disc');
const API = 'cd5180ded5d402ab8e337e131fdd4654';
const country = document.querySelector('.country');
const city = document.querySelector('.city');
const weather = document.querySelector('.weather');
const weatherCond = document.querySelector('.weather-main');
const weatherDisc = document.querySelector('.weather-disc');
const maxTemp = document.querySelector('.temp_max');
const minTemp = document.querySelector('.temp_min');
const humidity = document.querySelector('.detail-humid');
const wind = document.querySelector('.detail-wind');
const sea = document.querySelector('.detail-sea');
const lon = document.querySelector('.detail-lon');
const lat = document.querySelector('.detail-lat');


const weatherDetail = async function () {
    try {
        const weatherData = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${API}`).then((res) => res.json());
        disc.classList.remove('hidden');
        const [weather] = weatherData.weather;
        console.log(weatherData);
        console.log(cityName.value);

        country.innerHTML = weatherData.sys.country;
        city.innerHTML = weatherData.name;
        weatherCond.innerHTML = `${weatherData.weather[0].main} - `;
        weatherDisc.innerHTML = weatherData.weather[0].description;
        maxTemp.innerHTML = `${(weatherData.main.temp_max - 273.15).toFixed(2)}°c`;
        minTemp.innerHTML = `${(weatherData.main.temp_min - 273.15).toFixed(2)}°c`;
        humidity.innerHTML = `${weatherData.main.humidity} rh`;
        wind.innerHTML = `${weatherData.wind.speed}miles/hr`;
        sea.innerHTML = weatherData.main.sea_level ? `${weatherData.main.sea_level}m` : `No Discription`;
        lon.innerHTML = `${weatherData.coord.lon}°`;
        lat.innerHTML = `${weatherData.coord.lat}°`;
    }
    catch (err) {
        if (err.message === `undefined is not iterable (cannot read property Symbol(Symbol.iterator))`) {
            alert("Enter City Name Correctly");
        }
        if (err.message === `Failed to fetch`) {
            alert("Webapp or Server Connection is Down");
        }
        disc.classList.add('hidden');
    }
}
searchButton.addEventListener('click', weatherDetail)
window.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        if (cityName.value == false) return "";
        weatherDetail();
    }
})



