import React, { Component } from 'react';
import {
  Switch,
  Route
  } from 'react-router-dom';
import HeaderContainer from './components/common/HeaderContainer'
import { initClient } from './contentfulClient'
import './App.css';
import About from './components/pages/About';
import ProjectContainer from './components/pages/ProjectContainer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      content: []
    }
  }

  componentDidMount() {
    var client = initClient();

    client.getEntries()
    .then((response) => {
      var tempCatArray = [];

      for (let i = 0; i < response.items.length; i++) {
        tempCatArray.push(response.items[i]);
        tempCatArray.sort()
      }
      this.setState ({ content: tempCatArray })
    })
    .catch(console.error)
  }

  render() {
    console.log(this.state)
    return (
      <div className="app">
        <HeaderContainer />

        <Switch>
          <Route exact path='/About' render={() => <About props={ this.state.content } />}/>
          <Route path='/Projects' render={() => <ProjectContainer props={ this.state.content } />}/>
        </Switch>
      </div>
    );
  }
}

export default App;
