import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import Content from './components/content';
import NavBar from './components/navBar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router>
          <NavBar />
          <div className="container">
          <div className="row">
          <Route path="/" component={Content}/>
          <Route path="/country/:cca3" component={CountryDetail}/>

          </div>
          
          </div>


          </Router>
      </div>
    )
      
    
  }
}

export default App;
