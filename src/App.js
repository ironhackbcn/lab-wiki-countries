import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, NavLink, Switch, Route } from 'react-router-dom';
import CountryDetail from './CountryDetail';

class App extends Component {
  render() {
    return (
      <div>
      <nav className="navbar navbar-dark bg-primary mb-3">
        <div className="container">
          <NavLink className="navbar-brand" to="/">WikiCountries</NavLink>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-5" style={{maxHeight: '90vh', overflow: 'scroll'}}>
            <div className="list-group">
              <NavLink className="list-group-item list-group-item-action" to="/ABW">🇦🇼 Aruba</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/AFG">🇦🇫 Afghanistan</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/AGO">🇦🇴 Angola</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/AIA">🇦🇮 Anguilla</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/ALA">🇦🇽 Åland Islands</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/ALB">🇦🇱 Albania</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/AND">🇦🇩 Andorra</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/ARE">🇦🇪 United Arab Emirates</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/ARG">🇦🇷 Argentina</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/ARM">🇦🇲 Armenia</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/ASM">🇦🇸 American Samoa</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/ATA">🇦🇶 Antarctica</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/FLK">🇫🇰 Falkland Islands</NavLink>
              <NavLink className="list-group-item list-group-item-action active" to="/FRA">🇫🇷 France</NavLink>
              <NavLink className="list-group-item list-group-item-action" to="/ZWE">🇿🇼 Zimbabwe</NavLink>
            </div>
          </div>
          <Router>
            <Switch>
              <Route exact path="/" Component={CountryDetail} />
              <Route exact path="/:id" component={CountryDetail} />
            </Switch>
          </Router>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
