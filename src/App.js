import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import List from './components/List';
import CountryDetail from './components/CountryDetail';

const pageStyle = {
  display: 'flex',
  margin: '0 50px',
  height: '90vh'
}

const titleStyle = {
  fontSize: '50px',
  color: 'white',
  backgroundColor: '#3296c1',
  height: '10vh',
  textAlign: 'left',
  padding: '5px 20px'
}

class App extends Component {

  render() {
    return (
      <div className="App">
        <div style={titleStyle}><h1>Wiki Countries</h1></div>
        <div style={pageStyle}>
          <List />
          <Route path={`/:cca3`} component={CountryDetail} />
        </div>

      </div>
    );
  }
}

export default App;
