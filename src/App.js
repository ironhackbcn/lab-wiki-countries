import React, { Component } from 'react';
import countries from './data/countries.json';
import Navbar from './components/Navbar';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">

        <div className="row">
          <div className="col-5"> Wiki Countries

            { countries.map((country)=>{
              return <Navbar country={country}></Navbar>}
            )}
          </div>

          <div className="col-7 c">Country Details</div>

        </div>



      </div>
    );
  }
}

export default App;
