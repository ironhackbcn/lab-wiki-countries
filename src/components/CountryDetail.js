import React, { Component } from 'react';
import countries from '../data/countries.json'
import { Link } from 'react-router-dom';

// class countryDetail extends Component {

//   constructor(props){
//     super(props);
//     const countryObject = props.match;
//     console.log()





//     this.state = { 
//       countryCode: ''
//     }
// }
//   render() {
//    return(
//      <div>
//        <h3>Hola</h3>
//      </div>
//    )
//   } 
// }

// export default countryDetail;

function CountryDetail ({ match }){
  console.log(match)
  const country = countries.find((country) => country.cca3 === match.params.id)

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

          return <li key={borderCountry.cca3} className='country-list'><Link to={`/${borderCountry.cca3}`}>{borderCountry.name.official}</Link></li>
        })}
      </ul>
    </div>
  )
}

export default CountryDetail;