import WeatherManager from "./WeatherManager.js";
import WidgetManager from "./WidgetManager.js";

function init() {
    console.log("### Starting Weather-App ###"); // eslint-disable-line no-console
    // TODO Wetter-App implementieren
    // localStorage.clear();
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i),
            savedWidgets = new WeatherManager(localStorage.getItem(key));
        savedWidgets.fecthWeather(true);
    }
}

var weatherManager,
    widgetManager = new WidgetManager();
document.querySelector(".widgets").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        
        if (document.getElementById("input-text").value === "") {
            widgetManager.errorAlert(); 
            
        } else {
            weatherManager = new WeatherManager(document.getElementById("input-text").value);
            weatherManager.fecthWeather(false);
            document.getElementById("input-text").value = "";
            console.log(localStorage);
        }
        
    }
})

init();