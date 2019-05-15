import React, { Component } from 'react';
// import {Route,Switch} from 'react-router-dom'
import CountryDetail from'./components/CountryDetail';
import data from './data/countries.json'
import './App.css';


class App extends Component {
constructor(props){
  super(props);
  this.state = {
    countries : data
  }
}



  render() {
    return (
      <div className="App">
      {
        this.state.countries.map((oneCountry,index) => {

          return (
          <div key={index} >
          <div>{oneCountry.name.official}</div>
          <div>{oneCountry.cca3}</div>
          <div>{oneCountry.flag}</div>
          </div>
          
        )})
      }

{/* 
      <Switch>
      <Route exact path ="/CountryDetail" component={CountryDetail} /> 
      </Switch> */}
      </div>
    )
  }
}

export default App;
