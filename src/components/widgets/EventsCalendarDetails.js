import React, { Component } from 'react'

class EventsCalendarDetails extends Component {
  render() {
    return (
      <div className="ui widgets two column grid events-list">
        <div className="four wide column">
          <strong>
            06.13.19 5:00PM PST
          </strong>
        </div>

        <div className="twelve wide column">
          <div className="">
              <div className="content">
                  <strong className="event-title">Event Title</strong>
                  <div className="description">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias.
                  </div>
                
              </div>
            </div>        
          </div>
        </div>
    )
  }
}

export default EventsCalendarDetails
