import React, { Component } from 'react'
import NewsDetails from './NewsDetails';

class News extends Component {
  render() {
    return (
      <div id="news-widget" className="ui segment widgets">

        <h2>News Section</h2>

        <div className="ui two column doubling stackable grid serps-wrapper">
          <div className="eight wide column">
            <div className="ui segment widgets no-padding no-border">
              <NewsDetails />
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui segment widgets no-padding no-border">
              <NewsDetails />
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui segment widgets no-padding no-border">
              <NewsDetails />
            </div>
          </div>
          <div className="eight wide column">
            <div className="ui segment widgets no-padding no-border">
              <NewsDetails />
            </div>
          </div>
        </div>
        
        <div className="ui grid">
          <div className="column">
            <button className="ui right floated blue button">Archive</button>
          </div>
        </div>

        <div className="ui grid no-padding">
          <div className="two column row no-padding">
            <div className="twelve wide black column no-padding">
              <h2 className="ui header">Features</h2>
              <p>First section of content</p>
            </div>
            <div className="four wide teal column no-padding">
              <h2 className="ui inverted header">Statistics</h2>
              <p>First section of content</p>
              <div className="div"
                style={{
                  height: '20px'
                }}
              >
              </div><div className="div"
                style={{
                  height: '20px'
                }}
              >
              </div><div className="div"
                style={{
                  height: '20px'
                }}
              >
              </div><div className="div"
                style={{
                  height: '20px'
                }}
              >
              </div>
            </div>
          </div>
          
        </div>
        
      </div>
    )
  }
}

export default News
