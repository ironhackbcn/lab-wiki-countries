import React, { Component } from 'react';
import countries from './data/countries.json';
import './App.css';

class App extends Component {
  render() {
    console.log(countries);
    return (
      <div className="App">
        <ul class="nav justify-content-center">
          <li class="nav-item">Wiki Countries</li>
        </ul>
        <div class="row">
          <div class="col-5">Links</div>
          <div class="col-7">Info</div>
        </div>
      </div>
    );
  }
}

export default App;
