import React, { Component } from 'react'
import AlertDetails from './AlertDetails';

class Alerts extends Component {
  render() {
    return (
      <div id="alert-widget" className="ui segment widgets no-padding">
        <AlertDetails />
      </div>
    )
  }
}

export default Alerts
