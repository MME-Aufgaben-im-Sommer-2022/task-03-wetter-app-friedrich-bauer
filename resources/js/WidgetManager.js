import WeatherManager from "./WeatherManager.js";

class WidgetManager {
    constructor() {

    }

    reload() {
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i),
                savedWidgets = new WeatherManager(localStorage.getItem(key));
            savedWidgets.fetchWeather(true);
        }
    }

    errorAlert() {
        document.getElementsByClassName("widget add-item")[0].classList.add("show-error-animation");
            setTimeout(function() {
                document.getElementsByClassName("widget add-item")[0].classList.remove("show-error-animation");
            }, 1000); 
    }

    update() {
        document.querySelector('.widget-list').addEventListener("click", function(event) {
            if (event.target.matches(".update")) {
                location.reload();
            }
        });
    }

    delete(key) {
        document.querySelector('.widget-list').addEventListener("click", function(event) {
            if (event.target.matches(".delete")) {
                localStorage.removeItem(key);
                console.log(localStorage);
                location.reload();
            }
        });
    }
}



export default WidgetManager;