import React, { Component } from 'react';
import './App.css';

import Header from './components/card_header'
import Body from './components/card_body'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header gameType="solo" />
        <Body />
      </div>
    );
  }
}

export default App;
