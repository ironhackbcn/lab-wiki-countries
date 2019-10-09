import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Country from './components/Country';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
          <Route path="/" component={Country}  className="contain1"/>
          <Route path="/country/:cca3" component={CountryDetail}  className="contain2"/>
        </div>
      </Router>
    );
  }
}

export default App;
