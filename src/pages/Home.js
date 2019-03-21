import React, { Component } from 'react';
import Countrydetail from '../components/Countrydetail'
import countries from '../data/countries.json'


class Home extends Component {

  state={
    countries
  }

  

  renderList(){
    return this.state.countries.map((item, index) => {
      return <Countrydetail 
                  key={`id-${index}`} 
                  name={item.name.common} 
                  flag={item.flag}
                  cca3={item.cca3}              
                  // deleteHandler={this.deleteContact} 
                  />
    })
  }
  render() {
    return (
      <div>
      {this.renderList()} 
      </div>
    );
  }
}

export default Home;