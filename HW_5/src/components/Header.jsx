import React, { Component } from 'react';
import Weather from './Weather';
import Autocomplete from './AutocompleteWrapper';

const log = console.log;

class Header extends Component {

	constructor(props) {
		super(props);
	 log('Header construcor')
		this.state = {
      weatherCity: {"id":"4770","city_id":"709930","name":"Dnipropetrovsk","country":"UA","lon":"34.98333","lat":"48.450001"},
			weather:false
		};
	}

	fetchWeather = (weatherCity) => {
		// const json = '{"coord":{"lon":34.98,"lat":48.45},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":275.71,"pressure":1020,"humidity":51,"temp_min":275.15,"temp_max":276.15},"visibility":10000,"wind":{"speed":2.93,"deg":21.0004},"clouds":{"all":0},"dt":1554316200,"sys":{"type":1,"id":8901,"message":0.0032,"country":"UA","sunrise":1554261291,"sunset":1554307908},"id":709930,"name":"Dnipropetrovsk","cod":200}';
		// const weather = JSON.parse(json);
		// this.setState({weather: weather});

		const url = 'https://api.openweathermap.org/data/2.5/weather?q='+
		weatherCity.name+','+
		weatherCity.country.toLowerCase()+
		'&APPID=dcdb07d3414938d4e03dce509552828d'
		log(url)
		fetch(url)
      .then(function(response) {
        return response.json();
       })
      .then((data) => {
        this.setState({weather: data});
      })
      .catch( alert );
	}

	getWeather = () => {
		log('')
		// if (this.state.weatherCity){
		if (false){
			// this.fetchWeather(this.state.weatherCity)
		}else{
			return <Autocomplete weatherCityChange={this.weatherCityChange}/>
		}
	}

  weatherCityChange = (weatherCity) => {
		this.fetchWeather(weatherCity)
    this.setState({weatherCity: weatherCity});
  }

  componentDidMount(){
		if(this.state.weatherCity) this.fetchWeather(this.state.weatherCity)
  }

	render() {
		const weather = this.getWeather();
		return (
<header className="normal">
		<div className="content">
			<div className="sub_media">
				 <div className="left">
						<ul className="primary">
							 <li className="logo">
									<a href="/">
									<img src="https://www.themoviedb.org/assets/2/v4/logos/primary-green-d70eebe18a5eb5b166d5c1ef0796715b8d1a2cbc698f96d311d62f894ae87085.svg" alt="The Movie Database (TMDb)" width="81" height="72"/>
									</a>
							 </li>
							 <li>
									<a onClick={this.props.onGetMovies} href="/title" id="byTitle">Title</a>
							 </li>
							 <li>
									<a onClick={this.props.onGetMovies} href="/genre" id="byGenre">Genre</a>
							 </li>
							 <li>
									<a onClick={this.props.onGetMovies} href="/search" id="bySearch">Search</a>
							 </li>
						</ul>
				 </div>
				 <div className="right" style={{display:'initial'}}>
						<ul className="primary">
							 <li>
									<div className="glyph_wrapper">
										 <a className="glyph new_icon no_click">
												<span className="glyphicons glyphicons-pencil"></span>
												<div className="rollover">
													 {weather}
												</div>
										 </a>
									</div>
							 </li>
							 <li className="translate" style={{display:'none'}}>
									<div>en</div>
							 </li>
							 <li><Weather weather={this.state.weather}/></li>
						</ul>
				 </div>
			</div>
	 </div>
	 <div className="search_bar">
			<section className="search">
				 <div className="sub_media">
						<form onSubmit={this.props.onGetMovies} id="search_form" action="/search" method="get">
							<span tabIndex="-1" role="presentation" className="k-widget k-autocomplete k-header k-autocomplete-clearable k-state-default">
								<input onChange={this.props.onInputChange} dir="auto" type="text" tabIndex="0" autoComplete="off" placeholder="Search for a movie, tv show, person..." className="k-input" role="textbox"/>
								<span unselectable="on" className="k-icon k-clear-value k-i-close k-hidden" title="clear" role="button" tabIndex="-1"></span>
								<span className="k-icon k-i-loading" style={{display:'none'}}></span>
							</span>
							<input type="submit" disabled=""/>
						</form>
				 </div>
			</section>
	 </div>
	 <div className="k-list-container k-popup k-group k-reset" id="search_v4-list" data-role="popup" aria-hidden="true" style={{display:'none', position:'absolute'}}>
			<div className="k-group-header" style={{display:'none'}}></div>
			<div className="k-list-scroller" unselectable="on">
				 <ul unselectable="on" className="k-list k-reset" tabIndex="-1" aria-hidden="true" id="search_v4_listbox" aria-live="polite" data-role="staticlist" role="listbox"></ul>
			</div>
			<div className="k-nodata" style={{display:'none'}}>
				 <div></div>
			</div>
	 </div>
</header>
		);
	}
}

export default Header;
