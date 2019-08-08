import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Home from './pages/Home.js';
import Details from './pages/Details.js';

import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
       <Switch>
         <Route path='/' exact component={Home}/>
         <Route path='/details/:id' exact component={Details}/>
       </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
