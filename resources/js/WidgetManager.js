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

    errorAnimation() {
        document.getElementsByClassName("widget add-item")[0].classList.add("show-error-animation");
            setTimeout(function() {
                document.getElementsByClassName("widget add-item")[0].classList.remove("show-error-animation");
            }, 1000); 
    }

    update() {
        document.querySelector('.widget-list').addEventListener("click", function(event) {
            if (event.target.matches(".update")) {
                event.target.parentNode.parentNode.remove();
                localStorage.removeItem(event.target.parentNode.parentNode.getAttribute("data-city"));

                var updatedWidget = new WeatherManager(event.target.parentNode.parentNode.getAttribute("data-city"));
                updatedWidget.fetchWeather(false);
            }
        });
    }

    delete() {
        document.querySelector('.widget-list').addEventListener("click", function(event) {
            if (event.target.matches(".delete")) {
                localStorage.removeItem(event.target.parentNode.parentNode.getAttribute("data-city"));
                event.target.parentNode.parentNode.remove();
            }
        });
    }
}



export default WidgetManager;