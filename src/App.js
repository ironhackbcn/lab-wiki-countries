import React, { Component } from 'react';
import './App.css';
import { Switch ,Route } from "react-router-dom";
import Home from './pages/Home';
import Country from './pages/Country';
import NoMatch from './pages/NoMatch'

class App extends Component {

  render() {
    return (
      <Switch>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/country/:cca3" component={ Country }/>
        <Route component={ NoMatch }/>
      </Switch>
    );
  }
}

export default App;
