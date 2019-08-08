import React, { Component } from 'react';
import data from '../data/countries.json'
import {Link} from 'react-router-dom'

export default class Detail extends Component {
    state = {
        data: data,
        country: this.props.match.params.id,
        countryInfo: null
    }
    componentDidMount(){
        const newArr = this.state.data.filter((element)=>{
            if(element.cca3.includes(this.state.country)) return element
        })
        this.setState({
            countryInfo: newArr
        },()=>{
            console.log(this.state.countryInfo)
        })
    }
    handleStateToZero = (elem) => {
        const newArr = this.state.data.filter((country)=>country.cca3 === elem)
        this.setState({
            countryInfo: newArr
        },()=>{
            console.log(this.state.countryInfo)
        })
    }
    render() {
        return (
            <div>
              {this.state.countryInfo === null
              ? <p className="loading">Loading</p> 
              : (<>
                <h1>{this.state.countryInfo[0].name.common}</h1>
                <hr />
                <div className="table">
                    <div className="column-table">
                        <div className="title-table">
                            Capital
                        </div>
                        <div>
                            {this.state.countryInfo[0].capital}
                        </div>
                    </div>
                    <div className="column-table">
                        <div className="title-table">
                            Area
                        </div>
                        <div>
                            {this.state.countryInfo[0].area}

                        </div>
                    </div>
                    <div className="column-table">
                        {this.state.countryInfo[0].borders.map((element) => {
                            return (
                                <li><Link to={'/country/' + element} onClick={()=>{this.handleStateToZero(element)}}>{element}</Link></li>
                            )
                        })}
                    </div>
                </div>
                </>
              ) 
              }
            </div>
        )
    }
}

