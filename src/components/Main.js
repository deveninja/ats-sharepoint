import React, { Component } from 'react'
import Banner from './widgets/Banner';
import BlogSerp from './widgets/BlogSerp';
import News from './widgets/News';
import MiniWidgetWrapper from './widgets/MiniWidgetWrapper';
import Poll from './widgets/Poll';
import Alerts from './widgets/Alerts';
import EventsCalendar from './widgets/EventsCalendar';

class Main extends Component {
  render() {
    return (
      <div style={{width: '100%',maxWidth: '1400px',margin: '0 auto'}} className="ui two column stackable grid">
           <div className="ten wide column">
              <Banner />
              <BlogSerp />
              <News />
           </div>

           <div className="six wide column">
              <MiniWidgetWrapper />
              <Poll />
              <Alerts />
              <EventsCalendar />
           </div>
      </div>
    )
  }
}

export default Main
