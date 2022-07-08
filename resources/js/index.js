import WeatherManager from "./WeatherManager.js";
import WidgetManager from "./WidgetManager.js";


function init() {
    widgetManager.reload();

// creates new Array after drag and drop
    let widgetArray = [];
    const widget = document.querySelector('.widget-list');
    Sortable.create(widget, {
        animation: 150,
        onUpdate: function (evt) {
        widgetArray = [];
        evt.to.childNodes.forEach(widget => {
            widgetArray.push(widget.innerText);
        });
        },
    });
}

// creates widgets from search query 
var weatherManager,
    widgetManager = new WidgetManager();
document.querySelector(".widgets").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        
        if (document.getElementById("input-text").value === "") {
            widgetManager.errorAnimation(); 
            
        } else {
            weatherManager = new WeatherManager(document.getElementById("input-text").value);
            weatherManager.fetchWeather(false);
            document.getElementById("input-text").value = "";
        } 
    }
})

init();