import React, { Component } from 'react';
import {Route,Switch} from 'react-router-dom'
import CountryDetail from './components/CountryDetail';
import data from './data/countries.json'
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: data
    }
  }





  render() {
    const createClassString = () => {
      let result = '';
      result += `list-group-item list-group-item-action`;
      //   // if (props.isDanger) result += 'is-danger ';
      //   // if (props.isPrimary) result += 'is-primary ';
      //   // if (props.isSuccess) result += 'is-success ';
      return result;
    }

    return (
      <div className="App">
      <Switch>

        <div className="row">
          <div className="col-5">
            {
              this.state.countries.map((oneCountry, index) => {
                return (
                  <div className={createClassString()} key={index}>
                    <a href={oneCountry.cca3}>{oneCountry.name.official} {oneCountry.flag}</a>
                    <Route exact path ={oneCountry.cca3} component={CountryDetail} /> 
                  </div>

                )
              })
            }
          </div>
          <div className="col-7">

            {/* HERE THE COUNTRY DETAIL ???*/}
            

          </div>
        </div>


        

      </Switch>
      </div>
    )
  }
}

export default App;
