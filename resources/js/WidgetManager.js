class WidgetManager {
    constructor() {

    }

    nonExistedCityAlert() {
        document.getElementsByClassName("widget add-item")[0].classList.add("show-error-animation");
            setTimeout(function() {
                document.getElementsByClassName("widget add-item")[0].classList.remove("show-error-animation");
            }, 1000); 
    }

    update() {

    }

    delete() {

    }
}

export default WidgetManager;