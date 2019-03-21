import React, { Component } from 'react';
import './App.css';
import countries from'./data/countries.json';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CountryDetails from './components/CountryDetail';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  state = {
    countries: countries,
  }

  listCountries = () => {
    const { countries } = this.state;
    return countries.map((country, index) => {
      return <Link to={`/${country.cca3}`} className="list-group-item list-group-item-action">
        {country.flag}{country.name.official}
        </Link>
    })
  }

  styles = {
    col5: {
      maxHeight: '90vh',
      overflow: 'scroll',
    },
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="container margin-top">
            <nav className="navbar navbar-dark bg-primary mb-3">
              <div className="container">
                <a className="navbar-brand" href="/">Wikicountries</a>
              </div>
            </nav>
              <div className="container">
                  <div className="row">
                    <div className="col-5" style={ this.styles.col5 }>
                      <div className="list-group">
                        {this.listCountries()}
                      </div>
                    </div>
                    <div className="col-7">
                      <Route path="/:id" component={CountryDetails} />
                    </div>
                  </div>
                </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
