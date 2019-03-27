import React, { Component } from 'react';
// import Countries from './components/Countries'
import countries from './data/countries.json'
import { Route } from 'react-router-dom';
import './App.css';
import { Link } from 'react-router-dom';
// import CountryDetail from './components/CountryDetail';


function CountryDetail ({ match }){
  console.log(match)
  const country = countries.find((country) => country.cca3 === match.params.id)
  console.log(country)
  return(
    <div className="country-detail">
      <h3>{country.name.official}</h3>
      <h5>{country.capital}</h5>
      <p>{country.area}</p>
      <ul>
        {country.borders.map((country) =>{
          const getPais = (country)=>{
            const oneCountry = pais =>{
              return pais.cca3 === country;
            }
            return countries.find(oneCountry)
          }
          const borderCountry = getPais(country)
          console.log(borderCountry)
          return <li key={borderCountry.cca3} className='country-list'><Link to={`/${borderCountry.cca3}`}>{borderCountry.name.official}</Link></li>
        })}
      </ul>
    </div>
  )
}

function Countries (){
  return (
    <div>
    <ul>
        {countries.map((country) => {
          return (
            <li  key={country.cca3} className='country-list'>
              <img src={country.flag} alt=""/>
              <Link to={`/${country.cca3}`} >{country.name.official}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Wiki Countries</h1>
        <div className='country-components'>
          < Countries />
          <Route path={`/:id`} component={CountryDetail}/>
        </div>
      </div>
    );
  }
}

export default App;
