import React, { Component } from 'react'

class ContryDetail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      capital: this.props.capital,
      area: this.props.area,
      borders: [this.props.borders]
    }
  }
  render() {

    return (
      <div>

      </div>
    )
  }
}

export default ContryDetail;
