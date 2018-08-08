import React, { Component } from 'react';
import { PowerSelect } from 'react-power-select';
import 'react-power-select/dist/react-power-select.css';
import cities from './cities.js';
import axios from 'axios';
import DisplayWeather from './DisplayWeather';
import './styles.css';

class Container extends Component {
  state = {};

  getWeatherByCity = cityname => {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityname},in&APPID=0ed8935ec08da2ab5c2af86e5891c5a4`
      )
      .then(response => {
        //console.log("response", response);
        this.setState({
          weather: response.data.list[0]
        });
      });
  };

  handleChange = ({ option }) => {
    //console.log("change", option)
    this.setState({
      selectedOption: option
    });
    this.getWeatherByCity(option);
  };

  render() {
    //console.log("state",this.state);
    return (
      <div className="container">
        <h1>
          <font face="Comic sans MS" size=" 8">
            {' '}
            Whatsup Weather?
          </font>
        </h1>
        <PowerSelect
          options={cities.map(item => item.name)}
          selected={this.state.selectedOption}
          onChange={this.handleChange}
        />
        <div className="weatherContainer">
          <h2>
            <font face="Comic sans MS" size=" 5">
              Weather Details
            </font>{' '}
          </h2>
          <DisplayWeather
            data={this.state.weather}
            city={this.state.selectedOption}
          />
        </div>
      </div>
    );
  }
}
export default Container;
