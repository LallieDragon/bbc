import React, { Component } from 'react';
import './App.css';
import { NavContainer } from './components/nav'
import { initClient } from './contentfulClient'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
  }

  componentDidMount() {
    var client = initClient();
    var tempArray = [];

    client.getEntries()
    .then((response) => {
      response.items.forEach(data => {
        tempArray.push(data.fields);
      })
      this.setState({ data: tempArray})
      console.log(response.items)
      console.log(this.state.data, 'this is state')
    })
    .catch(console.error)
  }

  render() {
    console.log(this.state)

    return (
      <div className="App">
        <NavContainer data={ this.state.data }/>
      </div>
    );
  }
}

export default App;
