import React, { Component } from 'react';
import './App.css';
import { NavContainer } from './components/nav'
import client from './contentfulClient.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
    }
    this.getData = this.getData.bind(this);
  }

getData() {
  client.getEntries()
  .then(entries => {
    let tempArray = [];
    entries.items.forEach(entry => {
        tempArray.push(entry);
    });
    this.setState({
      data: tempArray
    });
    console.log(this.state.data)
  });
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
