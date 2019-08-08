import React from 'react'
import countries from '../data/countries.json'

export default function Borders(props) {
  const { country } = props;
  const borders = country.borders;

  const bordersNames = [];
  borders.forEach((border) => {
  countries.forEach((country) => {
      if (border === country.cca3) {
        bordersNames.push(country.name.common)
      }
    })
  })
  console.log(bordersNames);
  return (
    <div>
      {bordersNames.map((borderName, index) => {
        return (
          <li><a href={`/details/${borders[index]}`}>{borderName}</a></li>
        )
      })}
    </div>
  )
}
