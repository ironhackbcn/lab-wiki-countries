import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      
      <div className="container">
          <div className="h1">
            <h1 className="bg-primary">Country List</h1>
          </div>
        <header className="App-header">
        
          <div className="row">
            <div className="col-md-4">
              <Route path="/">
                <CountryList />
              </Route>
            </div>
            <div className="col-md-4">
              <Route path="/:id" component={CountryDetail}></Route>
            </div>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
