import React, { Component } from 'react';
import './App.css';

// Components
import { Switch, Route } from 'react-router-dom'
import CountriesList from './components/CountriesList'
import CountryDetail from './pages/CountryDetail'
import NotFound from './components/NotFound'

class App extends Component {

  render() {
    return (
      <div> 
        <Switch>
          <Route exact path='/' component={CountriesList} />
          <Route exact path='/country' component={CountryDetail} />
          <Route component={NotFound} />
        </Switch>
      </div>
    );
  }
}

export default App;
