import React, { Component } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Country from './pages/Country'
import List from './pages/List'
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="row">
          <div className="col-5">
            <List />
          </div>
          <Switch>
            <div className="col-7"><Route exact path="/country/:cca3" component={Country} /></div>
          </Switch>
        </div>

      </div>
    );
  }
}

export default App;
