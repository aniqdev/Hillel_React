import React, {Component} from 'react';
import styles from './Main-content.module.css';
import SchoolList from './scool-list/school-list-component.jsx';
import Header from '../header/header.jsx';
import Search from '../global/search/search.jsx';
import constants from '../../constants';
// import axios from 'axios';
import axios from '../../axios.jsx';

const studies = constants.studies;

const title = 'School list';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      studies,
      title,
      searchValue:''
    };
    // this.hendleSearch = this.hendleSearch.bind(this);
  }
  showMore(title){
    this.setState({
        studies: this.state.studies.map(c => {
            return c.title === title
                ? { ...c, isShowLess: !c.isShowLess }
                : c;
        })
    });
  }

  getMoviesClick(){
    const moviesData = {
      limit:15
    }

    axios.get('/movies', moviesData)
      .then(function (response) {
        // console.log(response);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  hendleSearch = (e) => {
    console.log(e.target.value)
    this.setState({
      searchValue: e.target.value
    })
  }

  render() {
    if (this.props.title) {
      return (
        <div className={styles.someClass + ' container'}>
          <header>
            getMovies 
            <Search hendleSearch={this.hendleSearch} value={this.state.searchValue}/>
            <button onClick={this.getMoviesClick} className="btn btn-info float-right">Get Movies</button>
          </header>
          <Header/>
          <h1>{ this.props.title }</h1>
          <SchoolList
            studies={ this.state.studies }
            title='School List'
            class={styles.newClass}
            showMore={this.showMore}
          />
        </div>
      )
    } else {
      return null;
    }
  }
}

export default MainContent;
