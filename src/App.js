import React, { Component } from 'react';
import './App.css';
import CountryDetail from'./pages/CountryDetail'
import CountryList from'./pages/CountryList'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Switch> 
          <Route path= '/' exact component = {CountryList} />
          <Route path= '/country-detail/:id' exact component = {CountryDetail} />
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
