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
        <nav class="navbar navbar-dark bg-primary mb-3">
          <div class="container">
            <h1 class="navbar-brand">WikiCountries</h1>
          </div>
        </nav>
        <div class="container">
          <div class="row">
            <div class="col-5" style= {style}>
              <div class="list-group">
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