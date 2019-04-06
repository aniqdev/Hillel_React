import React, { Component } from 'react';

import Header from './components/Header';
import Main from './components/Main-content';
import Footer from './components/Footer';

// const log = console.log;


class App extends Component {

   constructor(props) {
     super(props);

     this.api_key = '7b03194d5364c3fac6b159e67a4f43ed';
   
     this.state = {
      movies:[],
      inputValue: '',
      resultTitle: '',
     };
   }

   handleGetMovies = (e) => {
    e.preventDefault()
    let url;
    console.log(e.target.id);
    if ((e.target.id === 'bySearch' || e.target.id === 'search_form') && this.state.inputValue.trim().length > 1) {
      console.log('true')
      url = 'https://api.themoviedb.org/3/search/movie?api_key='+this.api_key+'&query='+this.state.inputValue;
      this.setState({resultTitle: 'Search Results:'});
    }else{
      url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+this.api_key;
      this.setState({resultTitle: 'Popular Movies:'});
    }
    // console.log(url);
    fetch(url)
      .then(function(response) {
        return response.json();
       })
      .then((data) => {
        if (data.results.length === 0) {
          this.setState({movies: data.results,resultTitle: 'Nothing Found!'});
        }else{
          this.setState({movies: data.results});          
        }
      })
      .catch( alert );
   }

   onInputChange = (e) => {
    this.setState({inputValue: e.target.value});
   }

   handleSort = (e) => {
    console.log(e.target.id);
    let sorted;
    if(e.target.id === 'sort_by_title'){
      sorted = [...this.state.movies].sort((a,b)=>{
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });
    }else if(e.target.id === 'sort_by_popularity'){
      sorted = [...this.state.movies].sort((a,b)=>{
        if (a.vote_average > b.vote_average) return -1;
        if (a.vote_average < b.vote_average) return 1;
        return 0;
      });
    }else if(e.target.id === 'sort_by_release_date'){
      sorted = [...this.state.movies].sort((a,b)=>{
        if (a.release_date > b.release_date) return 1;
        if (a.release_date < b.release_date) return -1;
        return 0;
      });
    }
          this.setState({movies: sorted});
   }

   componentDidMount(){

      // fetch("https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7b03194d5364c3fac6b159e67a4f43ed")
      //   .then(function(response) {
      //     return response.json();
      //    })
      //   .then((data) => {
      //     this.setState({movies: data.results})
      //   })
      //   .catch( alert );
   }

  render() {
    return (
      <React.Fragment>
        <Header 
          onGetMovies={this.handleGetMovies}
          onInputChange={this.onInputChange}/>
        <Main movies={this.state.movies} resultTitle={this.state.resultTitle} onSort={this.handleSort}/>
        <Footer>
          <h3 style={{width: '100%'}}>Hello Footer!</h3>
        </Footer>
      </React.Fragment>
    );
  }
}

export default App;
