import React, { Component } from 'react'
import Loader from './Loader';

class MiniWidget extends Component {
  render() {
    return (
      <div className="column">
        <div className="ui segment widgets no-padding no-border"
          // style={{
          //   backgroundImage: 'url("https://semantic-ui.com/images/wireframe/image.png")',
          //   backgroundSize: 'cover',
          //   backgroundPosition: 'center center',
          //   // height: '100px',
          //   backgroundRepeat: 'no-repeat'
          // }}
          
        >
          {/* <img 
            className="mini-widget-boxes"
            src="https://cfcdn.streetfightmag.com/wp-content/uploads/Square_Logo_Portrait-e1361455468546.png" 
            alt="" 
            width="100%" 
            height="auto" 
          /> */}
          <Loader bgColor={'#c3c3c3'} size={'medium'} height={'120px'}/>
        </div>
      </div>
    )
  }
}

export default MiniWidget
