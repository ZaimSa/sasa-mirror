import React from 'react';
import DateMirror from './Components/Date'
import WeatherMirror from './Components/Weather'
import './index.css';

class App extends React.Component {
    render() {
        return (
            <div className='App container'>
                <div className='row'>
                    <WeatherMirror />
                    <DateMirror />
                </div>
            </div>
        );
    }
}

export default App;