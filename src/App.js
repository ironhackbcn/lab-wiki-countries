import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import CountryNames from './components/CountryNames'
import NavBar from './components/NavBar';
import CountryDetails from './components/CountryDetails'

class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="row">
          <div className="col-5">
            <CountryNames />
          </div>
          <Switch>
            <div className="col-7">
            <Route exact path="/country/:cca3" 
            component={CountryDetails} /></div>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
