import React from 'react';
import './App.css';

class WeatherListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {
        const { forecastDay } = this.props;
        const date = new Date(forecastDay.dt * 1000);
        const weekday = forecastDay.weekDay;
        return (
            <div className="weather-list-item">
                <h2>{date.getMonth() + 1} / {date.getDate()}</h2>
                <h3>{weekday}</h3>
                <h3>{forecastDay.minTemp.toFixed(1)}&deg;F &#124;
                {forecastDay.maxTemp.toFixed(1)}&deg;F</h3>
            </div> 
        ); 
    }
}

export default WeatherListItem;