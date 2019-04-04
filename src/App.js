import React, { Component } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <>
      <NavBar/>
      <div className="container">
        <div className="row">
          <Router>
            <Route path='/' component={CountryList} />
            <Route exact path='/:id' component={CountryDetail} />
          </Router>
        </div>
      </div>
      </>
    );
  }
}

export default App;
