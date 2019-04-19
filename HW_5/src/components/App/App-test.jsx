import React from 'react'
import Autocomplete from 'react-autocomplete';
import { getStates, fakeRequest } from '../../utils';

const log = console.log;

export default class App extends React.Component {

  state = {
    value: '',
    unitedStates: getStates(),
  }

  requestTimer = null

  render() {
    console.log(this.state)
    return (
        <Autocomplete
          inputProps={{ id: 'states-autocomplete' }}
          wrapperStyle={{ position: 'relative', display: 'inline-block' }}
          value={this.state.value}
          items={this.state.unitedStates}
          getItemValue={(item) => item.name}
          onSelect={(value, item) => {
            // set the menu to only the selected item
            this.setState({ value, unitedStates: [ item ] })
            // or you could reset it to a default list again
            // this.setState({ unitedStates: getStates() })
          }}
          onChange={(event, value) => {
            this.setState({ value })
            // clearTimeout(this.requestTimer)
            // this.requestTimer = fakeRequest(value, (items) => {
            //   this.setState({ unitedStates: items })
            // })

            let url = 'http://hillel-react.loc/cities/'+value
            fetch(url)
              .then((response) => {
                return response.json();
               })
              .then((data) => {
                this.setState({ unitedStates: data.data })
               })
              .catch( alert );

          }}
          renderMenu={children => (
            <div className="menu">
              {children}
            </div>
          )}
          renderItem={(item, isHighlighted) => (
            <div
              className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
              key={item.id}
            >{item.name}</div>
          )}
        />
    )
  }
}