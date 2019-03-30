import React, { Component } from 'react';

import Card from './components/Card';

// const log = console.log;


class App extends Component {

   constructor(props) {
     super(props);
   
     this.state = {
      movies:[]
     };
   }

   componentDidMount(){

      fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7b03194d5364c3fac6b159e67a4f43ed")
        .then(function(response) {
          return response.json();
         })
        .then((data) => {
          this.setState({movies: data.results})
        })
        .catch( alert );
   }

  render() {
    return (
<main id="main" className="">
   <div className="media">
      <h2 className="title">Popular Movies</h2>
      <div className="filter_wrapper right">
         <ul>
            <li>
               <span className="glyphicons glyphicons-chevron-down"></span> Filter
               <ul className="inner_menu">
                  <li>
                     <div className="inner_menu_title">
                        <h4 className="left">Country</h4>
                        <span className="right"><small className="change_country small">Change?</small></span>
                        <div className="clear"></div>
                     </div>
                     <p className="selected_country">
                        <img width="24" height="24" src="https://www.themoviedb.org/assets/2/flags_v2/24/US-e86237650fc6e4b6f2255f3266bab2099e441962200f2da54d1aa34a3205ee86.png" alt=""/> United States of America
                     </p>
                     <p className="select_country"><span title="" className="k-widget k-dropdown k-header" unselectable="on" role="listbox" aria-haspopup="true" aria-expanded="false" tabIndex="0" aria-owns="choose_country_listbox" aria-live="polite" aria-disabled="false" aria-busy="false" aria-activedescendant="c4089d5f-c696-4430-b8e0-31cd814ae9a1" style={{display: 'none'}}><span unselectable="on" className="k-dropdown-wrap k-state-default"><span unselectable="on" className="k-input">United States of America</span><span unselectable="on" className="k-select" aria-label="select"><span className="k-icon k-i-arrow-60-down"></span></span></span><input id="choose_country" value="US" readOnly data-role="dropdownlist" style={{display: 'none'}}/></span></p>
                  </li>
               </ul>
            </li>
         </ul>
         <ul>
            <li>
               <span className="glyphicons glyphicons-chevron-down"></span> View
               <ul className="inner_menu">
                  <li><span id="mixed_compact" className="view_style" alt="Mixed Compact View" title="Mixed Compact View">Mixed Compact View</span></li>
                  <li><span id="poster_card" className="view_style" alt="Poster Card View" title="Poster Card View">Poster Card View</span></li>
                  <li><span id="backdrop_card" className="view_style" alt="Backdrop Card View" title="Backdrop Card View">Backdrop Card View</span></li>
               </ul>
            </li>
         </ul>
      </div>
      <div className="clear"></div>
      <div className="results flex results_poster_card">
        {this.state.movies.map(function(movie) {
          return <Card key={movie.id} movie={movie}/>
        })}
      </div>
   </div>
</main>
    );
  }
}

export default App;
