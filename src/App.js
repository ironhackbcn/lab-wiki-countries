import React, { Component } from "react";
import "./App.css";
import { Route } from "react-router-dom";
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  render() {
    return (
      <div className="App container">
        <header className="App-header">
          <Route path="/">
            <CountryList />
          </Route>
          <Route path="/:id" component={CountryDetail}></Route>
        </header>
      </div>
    );
  }
}

export default App;
