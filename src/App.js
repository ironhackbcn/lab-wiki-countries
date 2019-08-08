import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import CountryDetails from './components/CountryDetail'
import List from './components/List';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route path="/" exact component={List}/>
            <Route path="/:cca3" exact component={CountryDetails}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
