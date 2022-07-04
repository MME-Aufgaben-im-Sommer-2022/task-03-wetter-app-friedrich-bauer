// TODO: Persönlichen API-Key für OpenWeatherMap eintragen
const API_KEY = "90e67930d377da2867cf868cc7947124",
    // Über diese URL erhalten Sie die Wetterdaten für die angegebene Stadt ein (ersetzen Sie vor dem Aufruf $CITY und $API_KEY durch die entsprechenden Werte)
    FETCH_CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather?appid=" + API_KEY + "&lang=DE&units=metric&q=";

export {FETCH_CURRENT_WEATHER_URL}