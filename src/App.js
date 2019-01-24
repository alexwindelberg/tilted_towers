import React, { Component } from 'react';
import './App.css';
import Layout from './containers/layout'
import Scout from './scout'


class App extends Component {

  state = {
    data : ''
  };

  componentDidMount() {
    if(!this.state.data) {
      Scout.init().then( d => this.setState({
        data: d
      }));
    }
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="App">
          <Layout />
      </div>
    );
  }
}

export default App;
