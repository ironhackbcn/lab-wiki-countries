import React from 'react';
import countries from '../data/countries.json'
import {Link} from 'react-router-dom';


function Home() {
  return (
    <div>
      <h1>home</h1>
      <ul className="list-group">
        {countries.map((country, index) =>{
          return(
            <li key={index}>
              <Link to={`/details/${country.cca3}`}>{country.flag} {country.name.common}</Link>
            </li>
          )
        })
        }
</ul>
    </div>
  )
}

export default Home;