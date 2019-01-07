import React, { Component } from 'react'

class MiniWidget extends Component {
  render() {
    return (
      <div className="column">
        <div className="ui segment widgets"
          style={{
            backgroundImage: 'url("https://semantic-ui.com/images/wireframe/image.png")',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            height: '100px',
            backgroundRepeat: 'no-repeat'
          }}
          
        >
    
        </div>
      </div>
    )
  }
}

export default MiniWidget
