import React from 'react';
import './App.css';
import WeatherListItem from './WeatherListItem';


class WeatherList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render () {
    const { forecastDays } = this.props;
    return (
        <div className="weather-list flex-parent">
            { forecastDays.map((forecastDay, index) =>
                <WeatherListItem
                    key={forecastDay.dt}
                    forecastDay={forecastDay}
                    index={index}
                />
            ) }
        </div>
    );
  }
}

export default WeatherList;