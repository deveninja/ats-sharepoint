import React, { Component } from 'react'
import EventsCalendarDetails from './EventsCalendarDetails';

class EventsCalendar extends Component {
  render() {
    return (
      <div id="events-widget" className="ui segment widgets">
        <h2>EVENTS CALENDAR</h2>
        <EventsCalendarDetails />
        <EventsCalendarDetails />
        <EventsCalendarDetails />
        <EventsCalendarDetails />
        <EventsCalendarDetails />
        <EventsCalendarDetails />
        <EventsCalendarDetails />
        <EventsCalendarDetails />
      </div>
    )
  }
}

export default EventsCalendar
