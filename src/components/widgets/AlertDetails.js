import React, { Component } from 'react'
import AlertDetailsScroll from './AlertDetailsScroll';

class AlertDetails extends Component {
  render() {
    return (
      <div id="alert-segment-bg" className="ui segment divided grid no-border widgets">
        <div className="three wide column">
          <div className="ui widgets grid centered row">
            <div><span className="">ALERTS</span></div>
            <div><i className="large red exclamation triangle icon"></i></div>          
          </div>
        </div>
        <div className="thirteen wide column">
          <div className="ui grid">
            <div className="column">
              <AlertDetailsScroll />    
            </div>  
          </div>
        </div>
      </div>
    )
  }
}

export default AlertDetails
