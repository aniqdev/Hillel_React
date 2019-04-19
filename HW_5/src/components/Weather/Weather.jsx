import React from 'react';

// const log = console.log;

const Weather = (props) => {

    if (!props.weather) return null
    const w = props.weather;
    return (
      <div className="a" style={{color:'aqua'}}>
        {w.name + ', ' + (+w.main.temp - 273.15).toFixed(1)+'°C'}
      </div>
    );
}

export default Weather;
