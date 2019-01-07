import React, { Component } from 'react'
import PollDetailsSelection from './PollDetailsSelection';

class PollDetails extends Component {
  render() {
    return (
      <div id="poll-segment-bg" className="ui segment grid no-border widgets">
        <div className="five wide column centered">
          <div className="ui widgets grid">
            <h3 className="">QUICK POLL</h3>
            <i className="huge blue chart bar outline icon"></i>
          </div>
        </div>
        <div className="eleven wide column">
          <div className="ui widgets row grid">
            <PollDetailsSelection />
          </div>
        </div>
      </div>
    )
  }
}

export default PollDetails
