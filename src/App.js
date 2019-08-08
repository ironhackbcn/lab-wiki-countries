import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/Home';
import Nav from './components/Nav'
import Details from './components/Details';



import './App.css';


function App () {
  return( 
    <Router>
      <div className="App">
        <Nav/>
        <Switch>
          <Route path='/' exact component = {Home}/>
          <Route path='/:id' component = {Details}/>
        </Switch>
      </div>
    </Router>
  );
  
}

export default App;
