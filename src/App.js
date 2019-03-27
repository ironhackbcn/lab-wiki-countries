import React, { Component } from 'react';
import Countries from './components/Countries'
import { Switch, Route } from 'react-router-dom';
import './App.css';
import CountryDetail from './components/CountryDetail';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wiki Countries</h1>
        <div className='country-components'>
          < Countries />
          <CountryDetail />
        </div>
        
        <Switch>
          <Route exact path="/countries/:id" component={CountryDetail}/>
        </Switch>
      </div>
    );
  }
}

export default App;
