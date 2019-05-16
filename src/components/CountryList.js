import React from 'react'
import { Link } from 'react-router-dom';

function CountryList(props) {

  return (
    <Link  to={ `/${props.cca3}` } className="list-group-item list-group-item-action">{ props.flag } {props.name.official}</Link>
  )
}

export default CountryList
