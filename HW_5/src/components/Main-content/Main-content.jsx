import React, { Component } from 'react';

import Card from '../Card/Card';
// const log = console.log;

class Main extends Component {

   constructor(props) {
     super(props);
   
     this.state = {};
   }

  render() {
   console.log(this.props)
    return (
<main id="main" className="">
   <div className="media">
      <h2 className="title">{this.props.resultTitle}</h2>
      <div className="filter_wrapper right">
         <ul>
            <li>
               <span className="glyphicons glyphicons-chevron-down"></span> Sort by
               <ul className="inner_menu" style={{cursor:'pointer'}}>
                  <li><span onClick={this.props.onSort} id="sort_by_title" className="view_style">Title</span></li>
                  <li><span onClick={this.props.onSort} id="sort_by_popularity" className="view_style">Popularity</span></li>
                  <li><span onClick={this.props.onSort} id="sort_by_release_date" className="view_style">Date</span></li>
               </ul>
            </li>
         </ul>
      </div>
      <div className="clear"></div>
      <div className="results flex results_poster_card">
        {this.props.movies.map(function(movie) {
          return <Card key={movie.id} movie={movie}/>
        })}
      </div>
   </div>
</main>
    );
  }
}

export default Main;
