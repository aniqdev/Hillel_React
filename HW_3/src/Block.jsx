import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

class Block extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      textIsHidden:true,
      goods:0,
      bads:0,
    };

    this.openClick = this.openClick.bind(this)
  }

  openClick(){
    this.setState({textIsHidden:!this.state.textIsHidden})
  }

  likeClick(action){
    if(action === 'good'){
      const goods = ++this.state.goods
      this.setState({goods:goods})
    }
    if(action === 'bad'){
      const bads = ++this.state.bads
      this.setState({bads:bads})
    }
  }

  render() {
    return (
      <div className="col-lg-3 col-md-6 mb-4">
        <div className="card h-100">
          <img className="card-img-top" src="http://placehold.it/500x325" alt=""/>
          <div className="card-body">
            <h4 className="card-title">Card title</h4>
            <p className={"card-text "+(this.state.textIsHidden?'d-none':'')}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente esse necessitatibus neque.</p>
          </div>
          <div className="card-footer">
            <button onClick={this.openClick} className="btn btn-primary">{this.state.textIsHidden?'Open':'Close'}</button>
          </div>
          <div className="card-footer">
            <button onClick={this.likeClick.bind(this,'good')} className="btn btn-success">Good</button> <span>{this.state.goods} </span>
            <button onClick={this.likeClick.bind(this,'bad')} className="btn btn-danger">Bad</button> <span>{this.state.bads} </span>
          </div>
        </div>
      </div>
    );
  }
}

export default Block;
