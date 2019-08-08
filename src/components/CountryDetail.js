import React, { Component } from 'react'
import data from '../data/countries.json'
import {NavLink} from 'react-router-dom'
 


class CountryDetail extends Component {
  render(props) {
    return (
      <>
      {data.map((country, index) => {
        if(`/${country.cca3}` === this.props.location.pathname) {
          return (
            <React.Fragment key={index}>
              <article >
                <h1>{country.name.official}</h1>
                <h1>{country.flag}</h1>
                <p>{country.capital[0]}</p>
                <p>{country.area}</p>

                <ul key={index}>{country.borders.map((border,index) => {
                  return(
                  
                    <div key={index}>
                      {data.map((country, index) => {
                        if(border===country.cca3) {
                          return <li key={index}>{country.name.official}</li>
                        }
                        return null
                      })}
                    </div>
                    
                  )
                })}</ul>
              </article>
              <NavLink to="/">Back</NavLink>
          </ React.Fragment>
          )

        }
        return null
      }
    )}

  </>
    )}
}

export default CountryDetail;