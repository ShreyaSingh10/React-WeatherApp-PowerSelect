import React from 'react';

export default class DisplayWeather extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data && (
         <div className="displayWeather"> 
         	<h2><font face="Comic sans MS" size="5">{this.props.city} </font></h2>     
            <p> <b>Date and Time:</b> {data.dt_txt}</p>
            <p> <b>Temperature Maximum:</b> {data.main.temp_max}</p>
            <p> <b>Temperature Minimum:</b> {data.main.temp_min}</p>
            <p> <b>Humidity: {data.main.humidity}</b></p>
            <p> <b>Rain:</b> {data.weather[0].description}</p>
  		</div>
        )}
      </div>
    );
  }
}
