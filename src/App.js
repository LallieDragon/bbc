import React, { Component } from 'react';
import './App.css';
import { NavContainer } from './components/nav'
import client from './contentfulClient.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: [],
      // toggleMenuClass: 'app-invisibile'
    }
    this.menuOpen = this.menuOpen.bind(this);
    this.menuClose = this.menuClose.bind(this);
    this.toggleMenu = this.toggleMenu.bind(this);
  }

componenetDidMount() {
  client.getEntries()
  .then(entries => {
    let tempArray = [];
    entries.items.forEach(entry => {
      if (entry.fields.title) {
        tempArray.push(entry);
      }
    });
    this.setState({
      data: tempArray
    });
    console.log(this.state.data)
  });
}

  menuOpen() {
  this.setState({
    toggledMenuClass: 'app-menu-showing'
  });
}

menuClose() {
  this.setState({
    toggledMenuClass: 'app-invisible'
  });
}

toggleMenu() {
  (this.state.toggledMenuClass === 'app-invisible') ? this.menuOpen() : this.menuClose();
}

  render() {
    return (
      <div className="App">
        <NavContainer data={ this.data }/>
      </div>
    );
  }
}

export default App;
