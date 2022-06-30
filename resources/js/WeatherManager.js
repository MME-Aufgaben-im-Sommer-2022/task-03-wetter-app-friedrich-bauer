import {FETCH_CURRENT_WEATHER_URL} from "./api/OpenWeatherApiClient.js"
import WidgetManager from "./WidgetManager.js";

var template = document.querySelector("#weather-widget-template").content,
    widgetManager = new WidgetManager();

class WeatherManager {
    constructor(city) {
        this.city = city;
    }
    
    fecthWeather() {
        fetch(FETCH_CURRENT_WEATHER_URL + this.city + ",DE")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data))
            .catch((error) => {
                widgetManager.nonExistedCityAlert();
            });
    }

    displayWeather(data) {
        
        const { name } = data,
              { icon } = data.weather[0],
              { temp, temp_min, temp_max , humidity, pressure} = data.main,
              { speed } = data.wind;

        template.querySelector(".main").textContent = name + ", " + temp + "°C";
        template.querySelector(".icon").querySelector("#img").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        template.querySelector(".min-temperature").querySelector(".value").textContent = temp_min + "°C";
        template.querySelector(".max-temperature").querySelector(".value").textContent = temp_max + "°C";
        template.querySelector(".humidity").querySelector(".value").textContent = humidity + "%";
        template.querySelector(".pressure").querySelector(".value").textContent = pressure + "hPa";
        template.querySelector(".wind").querySelector(".value").textContent = speed + "m/s";

        document.querySelector(".widgets").appendChild(template.cloneNode(true));

        this.saveToStorage(name, name);
        
    }

    saveToStorage(key, value) {
        if (!localStorage[key]) {
            localStorage.setItem(key, value);
        }
    }


}

export default WeatherManager;