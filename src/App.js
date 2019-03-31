import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import Content from './components/Content';
import NavBar from './components/NavBar';
import CountryDetail from './components/CountryDetail';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';



class App extends Component {
  render() {
    return (
      <div className="App">
      
      <Router>
        <NavBar />
        <div className="container">
        <div className="row">
        <Content />
        <Switch>
          <Route exact path='/home' component={Content}/>
          <Route exact path='/home/:id' component={CountryDetail}/>  
        </Switch>
        </div>
        </div>
      </Router>
      </div>
      

      
    );
  }
}

export default App;
