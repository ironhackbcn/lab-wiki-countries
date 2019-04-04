import React, { Component } from 'react';
import './App.css';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import countries from '../data/countries';
import NavBar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  state = {
    countryList: countries,
  }
  render() {
    const countries= this.state.countryList
    return (
      <>
      <NavBar/>
      <div className="container">
        <div className="row">
          <Router>
            <Route 
              path='/' 
              render={()=><CountryList countries={countries}/>}
            />
            <Route
              exact path='/:id'
              render={()=><CountryDetail countries={countries}/>}
            />
          </Router>
        </div>
      </div>
      </>
    );
  }
}

export default App;
