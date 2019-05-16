
import React from 'react';
import {Route} from 'react-router-dom';
import CountryDetail from './components/CountryDetail';
import List from './components/List';
import 'bootstrap/dist/css/bootstrap.css';


import './App.css';



function App() {

  const navStyle = {
    color: "white",
    backgroundColor: "#007BFF",
    fontWeight: "bold",
  };

  return (
    
     <div class="container" >
     <nav style={navStyle} className="navbar navbar-expand-lg">
     <a style={navStyle} class="navbar-brand" href="#">Wiki Countries</a>
     </nav>
        <div class="row" >
          <List /> 
          <Route path='/details/:cc3a' component={CountryDetail}/>
      </div>      
    </div>
  );
}

//Switch??
export default App;