import React, { Component } from 'react';
import './App.css';
import countriesArray from './data/countries.json';
import CountriesList from './pages/CountriesList';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CountryDetails from './pages/CountryDetails';


class App extends Component {
  state = {
    countries: countriesArray
  }

  render() {
    return (
      // Todo en la misma pagina
      <div className="App">
              <div className="list-group">
                {this.state.countries.map((country, index) => {
                  return <CountriesList
                    key={index}
                    cca3={country.cca3}
                    flag={country.flag}
                    common={country.name.common}
                  />
                })}
              </div>
            <Route exact path="/:cca3" component={CountryDetails} />
      </div>
      //fin de todo en la misma pagina

      // // Dos paginas diferentes
      // <div className="App">
      //   <Router>
      //     <Switch>
      //       {/* listado principal */}
      //       <Route exact path="/">
      //         <div className="list-group">
      //           {this.state.countries.map((country, index) => {
      //             return <CountriesList
      //               key={index}
      //               cca3={country.cca3}
      //               flag={country.flag}
      //               common={country.name.common}
      //             />
      //           })}
      //         </div>
      //       </Route>
      //       {/* detalles del pais por codifo cca3 */}
      //       <Route exact path="/:cca3" component={CountryDetails} />
      //     </Switch>
      //   </Router>
      // </div>
    );
  }
}

export default App;
