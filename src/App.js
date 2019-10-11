import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AllCoubtries from './components/AllCoubtries';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>WikiCountries</h1>
          <div className="list-all-countries">
            <div className="countries">
                <Router path="/">
                  <AllCoubtries />
                </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
