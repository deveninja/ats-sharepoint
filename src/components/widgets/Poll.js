import React, { Component } from 'react'
import PollDetails from './PollDetails';

export class Poll extends Component {
  render() {
    return (
      <div 
        id="poll-widget" 
        className="ui segment widgets"
      >

        <div 
          id="poll-img-wrapper"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1427744/pexels-photo-1427744.jpeg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center center'
          }}  
        >
        </div>

        <PollDetails />
      </div>
    )
  }
}

export default Poll

