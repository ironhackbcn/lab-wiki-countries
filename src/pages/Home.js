import React, { Component } from 'react';
import CountryList from '../components/CountryList';

class Home extends Component {
  render() {
    const style = {
      maxHeight: '90vh', 
      overflow: 'scroll'
    }
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <h1 className="navbar-brand">WikiCountries</h1>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            <div className="col-5" style= {style}>
              <div className="list-group">
                <CountryList/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;