import React, { Component } from 'react';
import './App.css';
import countries from'./data/countries.json';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import CountryDetails from './components/CountryDetail';

class App extends Component {
  state = {
    countries: countries,
  }

  listCountries = () => {
    const { countries } = this.state;
    return countries.map((country, index) => {
      return <li><Link to={`/${country.cca3}`}>{country.flag}{country.name.official}</Link></li>
    })
  }

  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => {
            return(
            <div className="App">
              <ul>
                {this.listCountries()}
              </ul>
            </div>
            )
          }}>
          </Route>
          <Route path="/:id" component={CountryDetails} />
        </Switch>
      </Router>
    );
  }
}

export default App;
