import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AllCoubtries from './components/AllCoubtries';
import ListCountry from './components/ListCountry';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="App">
        <div>
          <h1>WikiCountries</h1>
          <div className="list-all-countries">
            <div className="countries">
                <Route path="/">
                  <AllCoubtries />
                </Route>
            </div>
          </div>
          <div className="list-selected-country">
            <Route  path="/:id" exact component={ListCountry} />
          </div>
        </div>
      </div>
    </Router>
    );
  }
}

export default App;
