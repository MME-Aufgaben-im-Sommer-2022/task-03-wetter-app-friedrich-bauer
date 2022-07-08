import {FETCH_CURRENT_WEATHER_URL} from "./api/OpenWeatherApiClient.js"
import WidgetManager from "./WidgetManager.js";

var template = document.querySelector("#weather-widget-template").content,
    widgetManager = new WidgetManager(),
    created;

class WeatherManager {
    constructor(city) {
        this.city = city;
    }
    
    //gets weather information
    fetchWeather(isReloaded) {
        fetch(FETCH_CURRENT_WEATHER_URL + this.city + ",DE")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data, isReloaded))
            .catch((error) => {
                widgetManager.errorAnimation();
            });
    }

    //shows icon information and prevents duplicates of cities 
    displayWeather(data, isReloaded) {
        const { name } = data,
              { icon } = data.weather[0],
              { temp, temp_min, temp_max , humidity, pressure} = data.main,
              { speed } = data.wind;

        template.querySelector(".main").textContent = name + ", " + Math.round(parseFloat(temp)) + "°C";
        template.querySelector(".icon").querySelector("#img").src = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
        template.querySelector(".min-temperature").querySelector(".value").textContent = Math.round(parseFloat(temp_min)) + "°C";
        template.querySelector(".max-temperature").querySelector(".value").textContent = Math.round(parseFloat(temp_max)) + "°C";
        template.querySelector(".humidity").querySelector(".value").textContent = humidity + "%";
        template.querySelector(".pressure").querySelector(".value").textContent = pressure + "hPa";
        template.querySelector(".wind").querySelector(".value").textContent = speed + "m/s";
        template.querySelector(".widget").setAttribute("data-city", name);

        this.saveToStorage(name, name);
        if (!created || isReloaded) {
            document.querySelector(".widget-list").appendChild(template.cloneNode(true));
            this.addFeatures();
        }
    }

    //saves persistent
    saveToStorage(key, value) {
        if (!localStorage[key]) {
            localStorage.setItem(key, value);
            created = false;
        } else {
            created = true;
        }
    }

    addFeatures() {
        widgetManager.update();
        widgetManager.delete();
    }
}


export default WeatherManager;