import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Country from "./pages/Country"
import CountryDetail from "./pages/ContryDetail"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="row">
            <Route path="/" component={Country}/>
            <Route path="/country/:cca3" component={CountryDetail}/>
        </div>
      </Router>
    );
  }
}

export default App;
