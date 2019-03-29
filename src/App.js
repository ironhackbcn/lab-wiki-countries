import React, { Component } from 'react';
import countries from './data/countries.json';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Countries from './Pages/Countries';
import Country from './Pages/Country';
import 'bulma/css/bulma.css';

class App extends Component {

  state = {
    countries: countries,
  }
  render() {
    return (
        <div className="App">
          <h1 className="heading">Wiki Countries</h1>
            {this.state.countries.map( (country, index) => {
              return <Countries 
                key={index}
                name={country.name.official}
                flag={country.flag}
              />
            })} 
        </div>
     
    );
  }
}

export default App;
