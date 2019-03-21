import React, { Component } from 'react';
import countries from '../data/countries.json';
import {Link} from 'react-router-dom';

const listStyle = {
  width: '30%',
  overflowY: 'scroll',
  marginRight: '10%'
}


class List extends Component {

  state={
    clickedCountry:''
  }

  clickCountry = (e)=> {
    console.log(e.target.name);
    this.setState({
      clickedCountry: e.target.name
    });
    e.target.className = "list-group-item list-group-item-action active";
  }

  renderList() {
    console.log('render list');
    return countries.map((e, index) => {
      return <Link to={`/${e.cca3}`} key={'idCountry-'+index} className="list-group-item list-group-item-action" name={e.name.common}> {e.flag} {e.name.common}</Link>
    })
  }
  render() {
    console.log('render');
    return (
      <div class="list-group scroll" style={listStyle}>
        {this.renderList()}
      </div>
    );
  }
}

export default List;