import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import ListCountries from "./components/ListCountries";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Nav />
        <Route path="/" component={ListCountries} />
      </div>
    );
  }
}

export default App;
