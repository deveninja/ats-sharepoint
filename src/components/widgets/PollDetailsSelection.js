import React, { Component } from 'react'

class PollDetailsSelection extends Component {
  render() {
    return (
      <div id="poll-form" className="ui form">
        <div className="grouped fields">
          <label><h4>Where do you want the summer party to be located?</h4></label>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Green Lake</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Bonnie Lake</label>
            </div>
          </div>
          <div className="field">
            <div className="ui radio checkbox">
              <input type="radio" name="example2" />
              <label>Lake Stevens</label>
            </div>
          </div>
        </div>
        <button className="ui button blue">VOTE</button>
      </div>
    )
  }
}

export default PollDetailsSelection
