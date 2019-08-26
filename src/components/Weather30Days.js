import React, { Component } from 'react'
import weatherConfig from '../config/config'

let myData= [];
let getCityName= '';
class Weather30Days extends Component {
    
    constructor(props){
        super(props);
        this.state= {
            weatherFetchData: [],
            myCityName: '',
            api30DaysURL: weatherConfig.weatherData.weatherAPI.api30DaysURL,
            apiKey: weatherConfig.weatherData.weatherAPI.apiKey,
            imageURL: weatherConfig.weatherData.weatherAPI.imageURL,
            isDataOK: false,
        }
    }

    get30DaysWeather(){
        const {cityID} = this.props;
        if(cityID != "")
        {
            const{api30DaysURL, apiKey} = this.state;
            let fetchURL= api30DaysURL + "?id=" + cityID + "&appid=" + apiKey; 
            
            fetch(fetchURL).then((response) => {
                return response.json();
            }).then((response) => {
                getCityName= response.city.name;
                return response.list;
            }).then((response) => {
                this.setState({
                    weatherFetchData: response,
                    myCityName: getCityName,
                    isDataOK: true
                  });
            }).catch((err) => {
                console.log('Bir hata oluştu.' + err);
            });  
        }
      }

    componentDidUpdate(){
        this.get30DaysWeather();
    }

    setFormatDate(myDate){
        let formatDate = new Date(myDate*1000);
        let myDay= formatDate.getDate();
        if(myDay <= 9)
            myDay= '0' + myDay;
        let myMonth= formatDate.getMonth();
        if(myMonth <= 9)
            myMonth= '0' + myMonth;
        let myYear= formatDate.getFullYear();
        return myDay + '.' + myMonth + '.' + myYear;
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
        const {myCityName, isDataOK} = this.state;
        return (
            <React.Fragment>
                {isDataOK ? 
                    <div className="col-12 mt-5">
                    <h2>{myCityName + ' ili 15 Günlük Hava Durumu'}</h2>
                    <table className="table table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th></th>
                                <th>Tarih</th>
                                <th>Sıcaklık</th>
                                <th>En Yüksek</th>
                                <th>En Düşük</th>
                                <th>Nem Oranı</th>
                                <th>Rüzgar</th>
                                <th>Bulut</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.weatherFetchData.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                            <td><img src={this.state.imageURL + item.weather[0].icon + '.png'} /></td>
                                            <td>{this.setFormatDate(item.dt)}</td>
                                            <td>{this.setFormatTemp(item.temp.day)} <sup>o</sup>C</td>
                                            <td>{this.setFormatTemp(item.temp.max)} <sup>o</sup>C</td>
                                            <td>{this.setFormatTemp(item.temp.min)} <sup>o</sup>C</td>
                                            <td>{item.humidity} <sup> %</sup></td>
                                            <td>{item.speed }<sup> km/s</sup></td>
                                            <td>{item.clouds} <sup> %</sup></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div> : ''}
            </React.Fragment>
        )
    }
}

export default Weather30Days;
