import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 >Country List</h1>
          </div>
        </div>
        <header>
          <div className="row">
            <div className="col-4">
              <Route path="/">
                <CountryList />
              </Route>
            </div>
            <div className="col-8 country-detail">
              <Route path="/:id" component={CountryDetail}></Route>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
