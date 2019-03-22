import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
class Country extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
   
    this.props.getCca3(this.props.country.cca3)
  } 
  render() {
    return (
      <div className="col-5" style={{ maxHeight: "90vh", overflow: "scroll" }}>
        <div className="list-group">
          <Link className="list-group-item list-group-item-action" to={`/country/${this.props.country.cca3}`}>{this.props.country.name.common}</Link>
        </div>
      </div>
      
    );
  }
}

export default Country;