import React, { Component } from 'react'

class Loader extends Component {
  render() {
    let specs = this.props
    
    return (
      <div className="ui segment" style={{height: specs.height}}>
        <div className="ui active dimmer" style={{backgroundColor: specs.bgColor}}>
          <div className={`ui ${specs.size} text loader`}>Fetching data...</div>
        </div>
      </div>
    )
  }
}

export default Loader
