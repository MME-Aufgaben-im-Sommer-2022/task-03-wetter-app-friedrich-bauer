import WeatherManager from "./WeatherManager.js";
import WidgetManager from "./WidgetManager.js";


function init() {
    console.log("### Starting Weather-App ###"); // eslint-disable-line no-console
    // TODO Wetter-App implementieren
    // localStorage.clear();
    for (var i = 0; i < localStorage.length; i++) {
        var key = localStorage.key(i),
            savedWidgets = new WeatherManager(localStorage.getItem(key));
        savedWidgets.fetchWeather(true);
    }

//creates new Array after drag and drop
    let widgetArray = [];
    const widget = document.querySelector('#widget-list');
    Sortable.create(widget, {
        animation: 150,
        onUpdate: function (evt) {
        widgetArray = []; //neues Array wird gecleard
        evt.to.childNodes.forEach(widget => { //für jedes Kindobjekt wird als widget übernommen
            widgetArray.push(widget.innerText); //Inhalt wird in Array gepushed
        });
        },
    });
}

var weatherManager,
    widgetManager = new WidgetManager();
document.querySelector(".widgets").addEventListener("keyup", function(event) {
    if (event.key == "Enter") {
        
        if (document.getElementById("input-text").value === "") {
            widgetManager.errorAlert(); 
            
        } else {
            weatherManager = new WeatherManager(document.getElementById("input-text").value);
            weatherManager.fetchWeather(false);
            document.getElementById("input-text").value = "";
            console.log(localStorage);
        } 
    }
})

init();