import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Block from './Block.jsx';

class Row extends Component {
  render() {
    return (
      <div className="row text-center">
        <Block/>
        <Block/>
        <Block/>
      </div>
    );
  }
}

export default Row;
