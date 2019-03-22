import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Countries from './pages/Countries';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Route path='/' component={ Countries } />
      </Router>
    );
  }
}

export default App;
