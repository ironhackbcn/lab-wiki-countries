import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Home from './Pages/Home'
import CountryDetail from './Pages/CountryDetail';
// import Home from './Pages/Home';
// import CountryDetail from './Pages/CountryDetail';



class App extends Component {
  state = {
    countryDetail: "ESP",
  }
  getCca3 = (cca3) =>{
    
    this.setState({
      countryDetail: cca3
    })
     
  }
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark bg-primary mb-3">
          <div className="container">
            <a className="navbar-brand" href="/">WikiCountries</a>
          </div>
        </nav>
        <div className="container">
          <div className="row">
            {/* <Router> */}
              {/* <Route exact path="/" component={Home} /> */}
              <Home getCca3={this.getCca3}/>
              <Route exact path="/country/:cca3" component={CountryDetail} />
            {/* </Router> */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
