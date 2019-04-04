import React, { Component } from 'react';
import { Link } from "react-router-dom";


class CountryItem extends Component {
    state = {  }
    render() { 
        const {data} = this.props;
        return ( 
          <Link to={`/${data.cca3}`} className="list-group-item list-group-item-action">{data.name.common}</Link>
         );
    }
}
 
export default CountryItem;