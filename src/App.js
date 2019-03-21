import React, { Component } from 'react';
import './App.css';
import { Switch, Link, Route, BrowserRouter as Router } from 'react-router-dom';
import List from './components/List';
import CountryDetail from './components/CountryDetail';


class App extends Component {

  render() {
    return (
      <div className="App">
          <Route exact path={`/:cca3`} component={CountryDetail} />
          <List/>
      </div>
    );
  }
}

export default App;
