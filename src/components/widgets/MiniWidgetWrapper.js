import React, { Component } from 'react'
import MiniWidget from './MiniWidget';

class MiniWidgetWrapper extends Component {
  render() {
    return (
      <div id="mini-widget" className="ui widgets no-padding no-border">
        <div className="ui three column tripling grid">
          
              <MiniWidget />
        
              <MiniWidget />
          
              <MiniWidget />
           
        </div>
      </div>
    )
  }
}

export default MiniWidgetWrapper
