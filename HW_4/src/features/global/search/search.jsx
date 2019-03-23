import React, {Component} from 'react';

const Search = (props) => {
  return <input onChange={props.hendleSearch} value={props.value}/>;
}

export default Search;