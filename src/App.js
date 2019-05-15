import React, { Component } from 'react';
import countries from './data/countries.json';
import Navbar from './components/Navbar';
import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route>

          <Switch>

            <div className="row">

              <div className="col-5"> Wiki Countries

                { countries.map(( country )=> {
                  return <Navbar country={country}></Navbar>}
                )}
              </div>

              <div className="col-7 c">Country Details</div>

            </div>

          </Switch>

        </Route>


      </div>
    );
  }
}

export default App;
