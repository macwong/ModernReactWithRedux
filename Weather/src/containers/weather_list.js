import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
    renderWeather(value, index, array) {
        if (value === undefined) {
            return;
        }

        const temps = value.list.map((weather) => weather.main.temp);
        const pressures = value.list.map((weather) => weather.main.pressure);
        const humidities = value.list.map((weather) => weather.main.humidity);
        const lng = value.city.coord.lon;
        const lat = value.city.coord.lat;

        return (
            <tr key={value.city.name}>
                <td className="chart-cell"><GoogleMap lat={lat} lng={lng} /></td>
                <td className="chart-cell">
                    <Chart data={temps} color="blue" unit="K" />
                </td>
                <td className="chart-cell">
                    <Chart data={pressures} color="red" unit="hPa" />
                </td>
                <td className="chart-cell">
                    <Chart data={humidities} color="green" unit="%" />
                </td>
            </tr>
        );
    }
 
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th className="chart-cell">City</th>
                        <th className="chart-cell">Temperature (K)</th>
                        <th className="chart-cell">Pressure (hPa)</th>
                        <th className="chart-cell">Humidity (%)</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps(state) {
    return { weather: state.weather };
}

export default connect(mapStateToProps)(WeatherList);