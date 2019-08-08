import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Detail from './Pages/Detail'

class App extends Component {
  render() {
    return (
     
      <Switch> 
<Route exact path='/' component={Home} />
<Route  path='/country/:id' component={Detail} />



      </Switch>
      
    );
  }
}

export default App;
