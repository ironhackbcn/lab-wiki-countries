import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import countries from './data/countries.json';
import Home from './pages/Home';
import Country from './pages/Country';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {

  state = {
    countries: [...countries],
  }


  render() {
    return (
        <Router>
          <nav className="navbar navbar-dark bg-primary mb-3">
            <div className="container">
              <a className="navbar-brand" href="/">WikiCountries</a>
            </div>
          </nav>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/:country" component={Country}/>
        </Switch>

      </Router>

    );
  }
}

export default App;
