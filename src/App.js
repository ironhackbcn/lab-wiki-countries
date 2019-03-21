import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import List from './components/List';
import Detail from './components/Detail';
import countries from './data/countries'



class App extends Component {

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/:id" render={(props) => <Detail {...props} selected={true}/>}/>
            <Route path="/" render={(props) => <Detail {...props} selected={false}/>}/>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
