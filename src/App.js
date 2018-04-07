import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
  NavLink
} from 'react-router-dom';
import HeaderContainer from './components/common/HeaderContainer'
import { initClient } from './contentfulClient'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      catTitles: []
    }
  }

  componentDidMount() {
    var client = initClient();
    client.getContentTypes()
    .then((response) => {
      var tempCatArray = [];
      for (let i = 0; i < response.items.length; i++) {
        tempCatArray.push(response.items[i].name);
        tempCatArray.sort()
      }
      this.setState ({ catTitles: tempCatArray })
    })
    .catch(console.error)
}

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <HeaderContainer props={ this.state.catTitles } />
      </div>
    );
  }
}

export default App;
