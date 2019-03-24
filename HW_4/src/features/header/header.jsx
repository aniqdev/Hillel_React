import React, {Component} from 'react';
import axios from 'axios';
// import axios from '../../axios.jsx';

class Header extends Component {
  getWeatherClick(){
    console.log('get weather')
    let link = `https://api.openweathermap.org/data/2.5/weather?q=`;
    let city = 'Calgary';
    let api = '&appid=cd09a8336afd1496b948087e07f9532f';
    axios.get(link+city+api+'&units=metric')
      .then(function (response) {
        console.log(response);
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  render() {
    return (
          <header>
            getWeather <button onClick={this.getWeatherClick} className="btn btn-info float-right">Get Weather</button>
          </header>
        );
  }
}

export default Header;