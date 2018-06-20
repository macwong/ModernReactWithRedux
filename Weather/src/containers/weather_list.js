import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
                    <Sparklines height={120} width={180} data={temps}>
                        <SparklinesLine color="blue" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={pressures}>
                        <SparklinesLine color="red" />
                    </Sparklines>
                </td>
                <td>
                    <Sparklines height={120} width={180} data={humidities}>
                        <SparklinesLine color="green" />
                    </Sparklines>
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