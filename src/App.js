import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import countries from './data/countries.json';
import Countries from './pages/Countries';
import InfoCountry from './pages/InfoCountry';
import NavBar from './components/NavBar';

class App extends Component {

  state = {
    listCountries: countries,
  }

  renderListCountries = () => {
    return this.state.listCountries.map((item, index) => {
      return <Countries key={`id-${index}`}
                        country={item}
                        />
    })
  }

  render() {
    return (
      <div className="App">

        <Router>
          
            <NavBar />
            <Route exact path="/Home" component={this.renderListCountries} />
            {/* como id se pasará el cca3 desde countries.js */}
            <Route exact path="/country/:id" component={InfoCountry} />
          
        </Router>
      </div>
    );
  }
}

export default App;
