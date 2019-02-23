import weather from 'weather-js';
import React from 'react';

class WeatherMirror extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            weather: ''
         };
         
         this.getTemperature();
         console.log('SALUT');
        ;
    }

    setWeather = (err, result) => {
        if(err) console.log(err);

        this.setState({
            weather: result[0].current.temperature
        });
    }

    getTemperature = () => {
        return weather.find({search: 'Paris, FR', degreeType: 'C'}, this.setWeather);
    }

    render() {
        return (
            <div className='Weather col-sm'>
                <h1>{this.state.weather}</h1>
            </div>
        );
    }
}

export default WeatherMirror;