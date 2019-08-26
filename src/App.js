import React, { Component } from 'react'
import './App.css';
import WeatherBox from './components/WeatherBox';
import weatherConfig from './config/config'

let myData= [];
class App extends Component {
  constructor(props){
    super(props);

    this.state={
      apiURL: weatherConfig.weatherData.weatherAPI.apiURL,
      api30DaysURL: weatherConfig.weatherData.weatherAPI.api30DaysURL,
      apiKey: weatherConfig.weatherData.weatherAPI.apiKey,
      imageURL: weatherConfig.weatherData.weatherAPI.imageURL,
      cities: weatherConfig.weatherData.weatherCities,
      weatherFetchData: [],
      weather30DayFetchData: [],
      getCityID: '',
      getCityName: ''
    }
  }

  getCitiesID(){
    const {cities}= this.state;
    cities.forEach((city) => {
        const{apiURL, apiKey} = this.state;
        let fetchURL= apiURL + "?id=" + city.id + "&appid=" + apiKey; 

        fetch(fetchURL).then((response) => {
            return response.json();
        }).then((response) => {
            myData.push(response);
            this.setState({
                weatherFetchData: myData
            })
        }).catch((err) => {
            console.log('Bir hata oluştu.' + err);
        });
    });
  }

  componentDidMount(){
      this.getCitiesID();
  }
  

  render(){
    return (
      <div className="App">
        <WeatherBox weatherFetchData={this.state.weatherFetchData} weatherID={this.state.getCityID} />
      </div>
    );
  }
}

export default App;
