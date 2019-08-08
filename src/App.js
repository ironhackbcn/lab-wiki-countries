import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import {Switch, Route} from 'react-router-dom';
import Home from './pages/Home.js'
import CountryDetails from './pages/CoutryDetails.js'
import NotFound from './pages/NotFoud.js'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/details/:country' exact component={CountryDetails} />
            <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
