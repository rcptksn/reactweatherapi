let weatherConfig= {
    weatherData: {
        weatherAPI: {
            apiURL: 'https://openweathermap.org/data/2.5/weather',
            api30DaysURL: 'https://openweathermap.org/data/2.5/forecast/daily',
            apiKey: 'b6907d289e10d714a6e88b30761fae22',
            imageURL: 'https://openweathermap.org/img/wn/'
        },
        weatherCities: [
            {
                "id": 323786,
                "name": "Ankara",
                "country": "TR",
                "coord": {
                  "lon": 32.854271,
                  "lat": 39.919868
                }
            },
            {
                "id": 745044,
                "name": "Istanbul",
                "country": "TR",
                "coord": {
                  "lon": 28.949659,
                  "lat": 41.01384
                }
            },
            {
                "id": 311046,
                "name": "Izmir",
                "country": "TR",
                "coord": {
                  "lon": 27.13838,
                  "lat": 38.412731
                }
            },
            {
                "id": 741098,
                "name": "Ordu",
                "country": "TR",
                "coord": {
                  "lon": 37.684479,
                  "lat": 40.908581
                }
            },
            {
                "id": 316540,
                "name": "Diyarbakır",
                "country": "TR",
                "coord": {
                  "lon": 40.23193,
                  "lat": 37.961521
                }
            }
        ]
    }
}

export default weatherConfig;