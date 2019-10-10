import React, { Component } from 'react';
import Countries from '../components/Countries';
import CountryDetails from '../components/CountryDetails';
import '../css/App.css';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="title">WikiCountries</div>
        <div className="row">
          <div className="col-5">
            <Route path="/">
              <Countries />
            </Route>
          </div>
          <div className="col-7 text-left">
            <Route path="/:id" component={CountryDetails} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
