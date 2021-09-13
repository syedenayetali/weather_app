class ViewDiscription {
    disc = document.querySelector('.disc');
    country = document.querySelector('.country');
    city = document.querySelector('.city');
    weatherCond = document.querySelector('.weather-main');
    weatherDisc = document.querySelector('.weather-disc');
    maxTemp = document.querySelector('.temp_max');
    minTemp = document.querySelector('.temp_min');
    humidity = document.querySelector('.detail-humid');
    wind = document.querySelector('.detail-wind');
    sea = document.querySelector('.detail-sea');
    lon = document.querySelector('.detail-lon');
    lat = document.querySelector('.detail-lat');
    spinner = document.querySelector('.sk-chase');

    #data;

    render(data) {
        this.#data = data;
        console.log(this.#data)
        this.#visible();
        this.#generateMarkUp();
    }

    renderSpinner() {
        this.spinner.classList.remove("hidden");
    }


    #visible() {
        this.disc.classList.remove('hidden');
    }

    #generateMarkUp() {
        this.spinner.classList.add("hidden");
        console.log(this.#data)
        this.country.innerHTML = this.#data.country;
        this.city.innerHTML = this.#data.city;
        this.weatherCond.innerHTML = `${this.#data.weather[0].main} - `;
        this.weatherDisc.innerHTML = this.#data.weather[0].description;
        this.maxTemp.innerHTML = `${(this.#data.maxTemp - 273.15).toFixed(2)}°c`;
        this.minTemp.innerHTML = `${(this.#data.minTemp - 273.15).toFixed(2)}°c`;
        this.humidity.innerHTML = `${this.#data.humidity} rh`;
        this.wind.innerHTML = `${this.#data.wind} miles/hr`;
        this.sea.innerHTML = this.#data.sea ? `${this.#data.sea}m` : `No Discription`;
        this.lon.innerHTML = `${this.#data.lon}°`;
        this.lat.innerHTML = `${this.#data.lat}°`;
    }
}

export default new ViewDiscription();