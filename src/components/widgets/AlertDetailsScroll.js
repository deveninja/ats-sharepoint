import React, { Component } from 'react'

class AlertDetailsScroll extends Component {
  render() {
    return (
      <div className="ui widgets">
          <div className="ui three column grid">
            <div className="one wide column centered row grid">
              <i className="chevron grey circle left icon"></i>
            </div>
            
            <div className="thirteen wide column centered row grid">
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>            
            </div>

            <div className="one wide column centered row grid">
              <i className="chevron grey circle right icon"></i>
            </div>
            
          </div>        
      </div>
    )
  }
}

export default AlertDetailsScroll
