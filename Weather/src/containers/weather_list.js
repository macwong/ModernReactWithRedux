import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';

class WeatherList extends Component {
    renderWeather(value, index, array) {
        if (value === undefined) {
            return;
        }

        const temps = value.list.map((weather) => weather.main.temp);
        const pressures = value.list.map((weather) => weather.main.pressure);
        const humidities = value.list.map((weather) => weather.main.humidity);

        return (
            <tr key={value.city.name}>
                <td>{value.city.name}</td>
                <td>
                    <Chart data={temps} color="blue" />
                </td>
                <td>
                    <Chart data={pressures} color="red" />
                </td>
                <td>
                    <Chart data={humidities} color="green" />
                </td>
            </tr>
        );
    }
 
    render() {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>City</th>
                        <th>Temperature</th>
                        <th>Pressure</th>
                        <th>Humidity</th>
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