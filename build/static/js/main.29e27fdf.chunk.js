(window.webpackJsonpreactweatherapi=window.webpackJsonpreactweatherapi||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(7),c=a.n(l),i=(a(13),a(1)),m=a(2),s=a(4),u=a(3),o=a(5),h=(a(14),{weatherData:{weatherAPI:{apiURL:"https://openweathermap.org/data/2.5/weather",api30DaysURL:"https://openweathermap.org/data/2.5/forecast/daily",apiKey:"b6907d289e10d714a6e88b30761fae22",imageURL:"https://openweathermap.org/img/wn/"},weatherCities:[{id:323786,name:"Ankara",country:"TR",coord:{lon:32.854271,lat:39.919868}},{id:745044,name:"Istanbul",country:"TR",coord:{lon:28.949659,lat:41.01384}},{id:311046,name:"Izmir",country:"TR",coord:{lon:27.13838,lat:38.412731}},{id:741098,name:"Ordu",country:"TR",coord:{lon:37.684479,lat:40.908581}},{id:316540,name:"Diyarbak\u0131r",country:"TR",coord:{lon:40.23193,lat:37.961521}}]}}),p="",d=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={weatherFetchData:[],myCityName:"",api30DaysURL:h.weatherData.weatherAPI.api30DaysURL,apiKey:h.weatherData.weatherAPI.apiKey,imageURL:h.weatherData.weatherAPI.imageURL,isDataOK:!1},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"get30DaysWeather",value:function(){var e=this,t=this.props.cityID;if(""!=t){var a=this.state,n=a.api30DaysURL,r=a.apiKey;fetch(n+"?id="+t+"&appid="+r).then(function(e){return e.json()}).then(function(e){return p=e.city.name,e.list}).then(function(t){e.setState({weatherFetchData:t,myCityName:p,isDataOK:!0})}).catch(function(e){console.log("Bir hata olu\u015ftu."+e)})}}},{key:"componentDidUpdate",value:function(){this.get30DaysWeather()}},{key:"setFormatDate",value:function(e){var t=new Date(1e3*e),a=t.getDate();a<=9&&(a="0"+a);var n=t.getMonth();return n<=9&&(n="0"+n),a+"."+n+"."+t.getFullYear()}},{key:"setFormatTemp",value:function(e){if(e.toString().length>=2)var t=e.toString().substr(0,2);return t}},{key:"render",value:function(){var e=this,t=this.state,a=t.myCityName,n=t.isDataOK;return r.a.createElement(r.a.Fragment,null,n?r.a.createElement("div",{className:"col-12 mt-5"},r.a.createElement("h2",null,a+" ili 15 G\xfcnl\xfck Hava Durumu"),r.a.createElement("table",{className:"table table-striped"},r.a.createElement("thead",{className:"thead-dark"},r.a.createElement("tr",null,r.a.createElement("th",null),r.a.createElement("th",null,"Tarih"),r.a.createElement("th",null,"S\u0131cakl\u0131k"),r.a.createElement("th",null,"En Y\xfcksek"),r.a.createElement("th",null,"En D\xfc\u015f\xfck"),r.a.createElement("th",null,"Nem Oran\u0131"),r.a.createElement("th",null,"R\xfczgar"),r.a.createElement("th",null,"Bulut"))),r.a.createElement("tbody",null,this.state.weatherFetchData.map(function(t,a){return r.a.createElement("tr",{key:a},r.a.createElement("td",null,r.a.createElement("img",{src:e.state.imageURL+t.weather[0].icon+".png"})),r.a.createElement("td",null,e.setFormatDate(t.dt)),r.a.createElement("td",null,e.setFormatTemp(t.temp.day)," ",r.a.createElement("sup",null,"o"),"C"),r.a.createElement("td",null,e.setFormatTemp(t.temp.max)," ",r.a.createElement("sup",null,"o"),"C"),r.a.createElement("td",null,e.setFormatTemp(t.temp.min)," ",r.a.createElement("sup",null,"o"),"C"),r.a.createElement("td",null,t.humidity," ",r.a.createElement("sup",null," %")),r.a.createElement("td",null,t.speed,r.a.createElement("sup",null," km/s")),r.a.createElement("td",null,t.clouds," ",r.a.createElement("sup",null," %")))})))):"")}}]),t}(n.Component),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={imageURL:h.weatherData.weatherAPI.imageURL,cityID:""},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"get30DaysWeather",value:function(e){this.setState({cityID:e})}},{key:"setFormatTemp",value:function(e){if(e.toString().length>=2)var t=e.toString().substr(0,2);return t}},{key:"render",value:function(){var e=this;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"appWeatherDatas"},this.props.weatherFetchData.map(function(t,a){return r.a.createElement("div",{className:"weatherItems",key:a},r.a.createElement("div",{className:"cityTitle"},t.name),r.a.createElement("div",{className:"weatherIcon"},r.a.createElement("img",{src:e.state.imageURL+t.weather[0].icon+".png"}),r.a.createElement("span",{className:"tempData"},e.setFormatTemp(t.main.temp)," ",r.a.createElement("sup",null,"o"),"C")),r.a.createElement("div",{className:"tempInfo"},r.a.createElement("span",null,r.a.createElement("b",null,"En Y\xfcksek: ")," ",t.main.temp_max," ",r.a.createElement("sup",null,"o"),"C"),r.a.createElement("span",null,r.a.createElement("b",null,"En D\xfc\u015f\xfck: ")," ",t.main.temp_min,r.a.createElement("sup",null,"o"),"C")),r.a.createElement("div",{className:"extraInfo"},r.a.createElement("span",null,r.a.createElement("b",null,"R\xfczgar: ")," ",t.wind.speed,r.a.createElement("sup",null," km/s")),r.a.createElement("span",null,r.a.createElement("b",null,"Nem: ")," ",t.main.humidity,r.a.createElement("sup",null," %")),r.a.createElement("span",null,r.a.createElement("b",null,"Bulut: ")," ",t.clouds.all,r.a.createElement("sup",null," %"))),r.a.createElement("div",{className:"btn30Days"},r.a.createElement("button",{onClick:function(){return e.get30DaysWeather(t.id)}},"15 G\xfcnl\xfck Hava Durumu \u0130\xe7in T\u0131klay\u0131n")))})),r.a.createElement(d,{cityID:this.state.cityID}))}}]),t}(n.Component),y=[],D=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={apiURL:h.weatherData.weatherAPI.apiURL,api30DaysURL:h.weatherData.weatherAPI.api30DaysURL,apiKey:h.weatherData.weatherAPI.apiKey,imageURL:h.weatherData.weatherAPI.imageURL,cities:h.weatherData.weatherCities,weatherFetchData:[],weather30DayFetchData:[],getCityID:"",getCityName:""},a}return Object(o.a)(t,e),Object(m.a)(t,[{key:"getCitiesID",value:function(){var e=this;this.state.cities.forEach(function(t){var a=e.state,n=a.apiURL,r=a.apiKey,l=n+"?id="+t.id+"&appid="+r;fetch(l).then(function(e){return e.json()}).then(function(t){y.push(t),e.setState({weatherFetchData:y})}).catch(function(e){console.log("Bir hata olu\u015ftu."+e)})})}},{key:"componentDidMount",value:function(){this.getCitiesID()}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(E,{weatherFetchData:this.state.weatherFetchData,weatherID:this.state.getCityID}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.29e27fdf.chunk.js.map