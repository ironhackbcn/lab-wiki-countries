import React, { Component } from 'react';
import './App.css';

// Components
import { Switch, Route } from 'react-router-dom'
import CountriesList from './components/CountriesList'
// import CountryDetail from './pages/CountryDetail'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="">
          {/* <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/country/:cca3' component={CountryDetail} />
          </Switch> */}
        </header>
        <main>
          <CountriesList />
        </main>
      </div>
    );
  }
}

export default App;
