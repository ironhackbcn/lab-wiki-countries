import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";

import SideBar from './components/SideBar';
import Home from './components/Home';
import CountryDetail from './components/CountryDetail';

class App extends Component {

  render() {
    return (
      <div id="root">
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <Link to='/' className="navbar-brand">WikiCountries</Link>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <SideBar></SideBar>
            <Switch>
               <Route exact path='/' component={Home}/>              
               <Route exact path="/:id" component={CountryDetail}/>              
            </Switch>            
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
