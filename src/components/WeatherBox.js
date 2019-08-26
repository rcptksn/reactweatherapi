import React, { Component } from 'react'
import weatherConfig from '../config/config'
import Weather30Days from './Weather30Days'

class WeatherBox extends Component {
    constructor(props){
        super(props);

        this.state={
            imageURL: weatherConfig.weatherData.weatherAPI.imageURL,
            cityID: '',

        }
    }

    get30DaysWeather(cityID){
        this.setState({
            cityID: cityID
        });
        
    }

    setFormatTemp(myTemp){
        var tempLen= myTemp.toString().length;
        if(tempLen >= 2)
        {
            var formatTemp= myTemp.toString().substr(0,2);
        }
        return formatTemp;
    }
    
    render() {
        
        return (
            <React.Fragment>
                <div className="appWeatherDatas">
                    {
                        this.props.weatherFetchData.map((item, index) => {
                            return(
                                <div className="weatherItems" key={index}>
                                    <div className="cityTitle">
                                        {item.name}
                                    </div>
                                    <div className="weatherIcon">
                                        <img src={this.state.imageURL + item.weather[0].icon + '.png'} />
                                        <span className="tempData">{this.setFormatTemp(item.main.temp)} <sup>o</sup>C</span>
                                    </div>
                                    <div className="tempInfo">
                                        <span><b>En Yüksek: </b> {item.main.temp_max} <sup>o</sup>C</span>
                                        <span><b>En Düşük: </b> {item.main.temp_min}<sup>o</sup>C</span>
                                    </div>
                                    <div className="extraInfo">
                                        <span><b>Rüzgar: </b> {item.wind.speed}<sup> km/s</sup></span>
                                        <span><b>Nem: </b> {item.main.humidity}<sup> %</sup></span>
                                        <span><b>Bulut: </b> {item.clouds.all}<sup> %</sup></span>
                                    </div>
                                    <div className="btn30Days">
                                        <button onClick={() => this.get30DaysWeather(item.id)}>15 Günlük Hava Durumu İçin Tıklayın</button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                <Weather30Days cityID={this.state.cityID} />
            </React.Fragment>
            
        )
    }
}

export default WeatherBox;