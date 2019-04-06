import React, { Component } from 'react';

const log = console.log;

class Card extends Component {

   constructor(props) {
     super(props);
   
     this.state = {};
   }

  render() {
    if (!this.props.weather) return null
    const w = this.props.weather;
    return (
      <div className="a" style={{color:'aqua'}}>
        {w.name + ', ' + (+w.main.temp - 273.15).toFixed(1)+'°C'}
      </div>
    );
  }
}

export default Card;
