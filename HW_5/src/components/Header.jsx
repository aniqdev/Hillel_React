import React, { Component } from 'react';

// const log = console.log;

class Card extends Component {

   constructor(props) {
     super(props);
   
     this.state = {};
   }

  render() {
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
         <div className="right" style={{display:'none'}}>
            <ul className="primary">
               <li>
                  <div className="glyph_wrapper">
                     <a className="glyph new_icon no_click" href="/">
                        <span className="glyphicons glyphicons-plus"></span>
                        <div className="rollover">
                           <p>Can't find a movie or TV show? Login to create it.</p>
                        </div>
                     </a>
                  </div>
               </li>
               <li className="translate" data-role="tooltip">
                  <div>en</div>
               </li>
               <li><a href="/login">Login</a></li>
               <li><a href="/account/signup">Sign Up</a></li>
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

export default Card;
