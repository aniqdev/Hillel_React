import React, { Component } from 'react';

// const log = console.log;

class Card extends Component {

   constructor(props) {
     super(props);
   
     this.state = {};
   }

  render() {
      const m = this.props.movie;
    return (
<div className="item poster card">
   <div className="image_content">
      <a id="movie_299537" className="result" href="/movie/299537" title="Captain Marvel" alt="Captain Marvel">
         <img className="poster" data-sizes="auto" alt="Captain Marvel" sizes="185px" src={"https://image.tmdb.org/t/p/w185_and_h278_bestv2"+m.poster_path}/>
         <div className="meta" data-role="tooltip">
            <span id="popularity_544fec3c0e0a2601d8002462_value" className="hide popularity_rank_value">
               <div className="tooltip_popup popularity">
                  <h3>Popularity Rank</h3>
                  <p><span>Today:</span> 1</p>
                  <p><span>Last Week:</span> 1</p>
               </div>
            </span>
            <span id="popularity_544fec3c0e0a2601d8002462" className="glyphicons glyphicons-cardio x1 popularity_rank"></span>
            <span className="right">
            </span>
         </div>
      </a>
   </div>
   <div className="info">
      <div className="wrapper">
         <div className="consensus tight">
            <div className="outer_ring">
               <div className="user_score_chart 544fec3c0e0a2601d8002462" data-percent="73.0" data-track-color="#204529" data-bar-color="#21d07a">
                  <div className="percent">
                     <span className={"icon icon-r"+parseInt(m.vote_average*10)}></span>
                  </div>
                  <canvas height="32" width="32"></canvas>
               </div>
            </div>
         </div>
         <div className="flex">
            <a id="movie_299537" className="title result" href="/movie/299537" title="Captain Marvel" alt="Captain Marvel">{m.title}</a>
            <span>{m.release_date}</span>
         </div>
      </div>
      <p className="overview">{m.overview}...</p>
      <p className="view_more"><a id="movie_299537" className="result" href="/movie/299537" title="Captain Marvel" alt="Captain Marvel">More Info</a></p>
   </div>
</div>
    );
  }
}

export default Card;
