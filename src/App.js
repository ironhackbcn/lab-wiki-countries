import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import List from './components/List';
import Detail from './components/Detail';


class App extends Component {

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={List} />
          <Route exact path="/:id" component={Detail} />
        </Switch>
      </Router>
    );
  }
}

export default App;
