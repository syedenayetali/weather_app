import * as model from "./model.js";
import view from "./view/view.js";
import View from "./view/view.js"
const cityName = document.getElementById('name');
const searchButton = document.getElementById('search');
const disc = document.querySelector('.disc');
const renderSpinner = document.querySelector('.sk-chase');

const weatherDetail = async function () {
    try {
        view.renderSpinner();
        // Pulling Data from API
        const weatherInfo = await model.weatherData(cityName.value);

        // Rendering on the Viewboard
        View.render(weatherInfo);
    }
    catch (err) {
        renderSpinner.classList.add('hidden');
        disc.classList.add('hidden');
        if (err.message === `undefined is not iterable (cannot read property Symbol(Symbol.iterator))`) {
            alert("Enter City Name Correctly");
        }
        if (err.message === `Failed to fetch`) {
            alert("Webapp or Server Connection is Down");
        }
        else {
            alert("Kinldy Input a Valid City Name")
        }

    }
}

// Search Click Event
searchButton.addEventListener('click', weatherDetail)
window.addEventListener('keyup', function (e) {
    if (e.key === "Enter") {
        if (cityName.value == false) return "";
        weatherDetail();
    }
})



