import React from 'react';
import countries from '../data/countries.json';
import { Link } from 'react-router-dom';

const CountryDetails = (props) => {
  const {
    match: {
      params: { id },
    },
  } = props;

  if (id !== '') {
    const country = countries.filter((co) => {
      return co.cca3 === id;
    });

    if (country) {
      return (
        <div>
          <div className="list-wrapper">
            <div className="list">
              <h1>{country[0].name.common}</h1>
            </div>
            <div className="list">
              <div>Capital:</div> <div>{country[0].capital}</div>
            </div>
            <div className="list">
              <div>Area:</div> <div>{country[0].area} km2</div>
            </div>
            <div className="list">
              <div>Borders:</div>
              <div>
                <ul>
                  {country[0].borders.map((border) => {
                    const borderObj = countries.filter((country) => {
                      return country.cca3 === border;
                    });
                    return (
                      <li key={`li${borderObj[0].cca3}`}>
                        <Link to={'/' + borderObj[0].cca3}>
                          {borderObj[0].name.common}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return <>NOT FOUND</>;
    }
  } else {
  }
};

export default CountryDetails;
