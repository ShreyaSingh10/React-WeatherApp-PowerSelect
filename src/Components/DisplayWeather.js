import React from 'react';

const conversion = value => Math.round(value - 273);

export default class DisplayWeather extends React.Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        {data && (
          <div className="displayWeather">
            <h2>
              <font face="Comic sans MS" size="5">
                {this.props.city}{' '}
              </font>
            </h2>
            <p>
              {' '}
              <b>Date and Time:</b> {data.dt_txt}
            </p>
            <p>
              {' '}
              <b>Temperature Maximum:</b> {conversion(data.main.temp_max)} °C
            </p>
            <p>
              {' '}
              <b>Temperature Minimum:</b> {conversion(data.main.temp_min)} °C
            </p>
            <p>
              {' '}
              <b>Humidity:</b> {data.main.humidity} %
            </p>
            <p>
              {' '}
              <b>Rain:</b> {data.weather[0].description}
            </p>
          </div>
        )}
      </div>
    );
  }
}
