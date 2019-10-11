import React, { Component } from "react";
import "./App.css";
import Nav from "./components/Nav";
import { Switch, Route } from 'react-router-dom';
import CountryList from "./components/CountryList";
import CountryDetail from "./components/CountryDetail";

class App extends Component {
  

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Nav/>
        
        <Switch>
          <Route exact path='/' component={CountryList} />
          <Route exact path="/:cca3" component={CountryDetail} /> */}
        </Switch>
        </header>
      </div>
    );
  }
}

export default App;
